import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import User from "../models/admin_users.js";

dotenv.config({ path: '.env' });

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// const otp = generateOTP();
let otps = {}

const sendSms = async (phone, otp) => {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER) {
    throw new Error('Mobile OTP is not configured. Add the Twilio environment variables first.');
  }
  const body = new URLSearchParams({
    From: process.env.TWILIO_PHONE_NUMBER,
    To: phone,
    Body: `Your Psychobeings admin verification code is ${otp}. It expires in 10 minutes.`,
  });
  const credentials = Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64');
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`, {
    method: 'POST',
    headers: { Authorization: `Basic ${credentials}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!response.ok) throw new Error('The mobile OTP could not be sent.');
};



dotenv.config();
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.EMAILADD, // Brevo 
    pass:process.env.EMAILPASS // Brevo
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Server connection failed:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

//..............................Send Email.....................................
export const Send = async (req, res) => {
    console.log("sent otp")
  const  email  = req.body.email;
  const otp = generateOTP();
  const expirationTime = Date.now() + 10 * 60 * 1000; // 10 minutes from now
  
  otps[email] = { otp, expirationTime };
  console.log(otps)

  const mailOptions = {
    from: process.env.SENDERMAIL,
    to: email,
    subject: "OTP Verification Email",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center;">
        
        <h2 style="color: #333; margin-bottom: 20px;">OTP Verification Email</h2>
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          Dear User,
        </p>
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          Welcome Admin. To change your password, please use the following OTP (One-Time Password) to verify your account:
        </p>
        <p style="color: #333; font-size: 2.0em; font-weight: bold; margin-bottom: 20px;">
          ${otp}
        </p>
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          This OTP is valid for 10 minutes. If you did not request this verification, please disregard this email. Once your account is verified, you will have access to our platform and its features.
        </p>
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          If you have any questions or need assistance, please feel free to reach out to us. We are here to help!
        </p>
      </div>
    `,
  };
  


try {

  const user = await  User.findOne({email});


  if(!user)  return res.status(400).json({message:"User does not exist!, ACCESS DENIED"})

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent: ", info.response);
  res.status(200).send("OTP sent successfully.");
} catch (error)
{
  res.status(400).json({message:"Error : " + error})
}
//  comment

}


//..........................Verify.......................................

export const Verify=  (req, res) => {
  const email = req.body.email;
  const otp = req.body.otp;
  const record = otps[email];
  console.log(otps)


  if (!record) {
      return res.status(400).json({message:"No OTP found for this email." });
  }

  const { otp: storedOtp, expirationTime } = record;

  if (Date.now() > expirationTime) {
      delete otps[email]; // Clean up expired OTP
      return res.status(400).json({message:"OTP has expired."});
  }

  if (storedOtp === otp) {
      delete otps[email]; // Clean up used OTP
      return res.status(200).json({message:"OTP verified successfully."});
  } else {
      return res.status(400).json({message:"Invalid OTP."});
  }
};

export const SendMobile = async (req, res) => {
  const phone = req.body.phone?.trim();
  if (!phone) return res.status(400).json({ message: 'Mobile number is required.' });
  try {
    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ message: 'No admin account is linked to this mobile number.' });
    const otp = generateOTP();
    otps[`mobile:${phone}`] = { otp, expirationTime: Date.now() + 10 * 60 * 1000, email: user.email };
    await sendSms(phone, otp);
    res.status(200).json({ message: 'OTP sent to your mobile.' });
  } catch (error) {
    res.status(503).json({ message: error.message || 'Mobile OTP service is unavailable.' });
  }
};

export const VerifyMobile = (req, res) => {
  const phone = req.body.phone?.trim();
  const record = otps[`mobile:${phone}`];
  if (!record) return res.status(400).json({ message: 'No OTP found for this mobile number.' });
  if (Date.now() > record.expirationTime) {
    delete otps[`mobile:${phone}`];
    return res.status(400).json({ message: 'OTP has expired.' });
  }
  if (record.otp !== req.body.otp) return res.status(400).json({ message: 'Invalid OTP.' });
  delete otps[`mobile:${phone}`];
  res.status(200).json({ message: 'OTP verified successfully.', email: record.email });
};




//.............................Send Email.....................................

  