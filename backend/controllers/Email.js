import nodemailer from "nodemailer";
import dotenv from 'dotenv';

const modifyDate = (e) => {
  const date = new Date(e);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
dotenv.config({ path: '.env' });
// console.log(process.env.EMAILADD)



const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAILADD,
    pass: process.env.EMAILPASS
  },
  tls: {
    rejectUnauthorized: true
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Server connection failed:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
//..............................Send Message.....................................
export const SendMessage = async (req, res) => {

  const { name, email, message } = req.body;
  console.log(email);

  const mailToUser = {
    from: process.env.EMAIL,
    to: email,
    subject: "Message from Psychobeings",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center;">
        <img src="https://i.ibb.co/ZdPGNn2/logo2.png" alt="Pshycobeings" style="width: 150px; height: auto; margin-bottom: 20px;" />
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          Dear User,
        </p>
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          Thank you for connecting with us. We have received your message and we really appreciate your concerns towards marginal technology.
        </p>
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          Our team will reach you soon!
        </p>
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          If you have any questions or need assistance, please feel free to reach out to us. We are here to help!
        </p>
      </div>
    `,
  };

  const mailToAdmin = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "New Message from site",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center;">
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          Dear Admin,
        </p>
        <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
          A new message received at the Pshycobeings Deployment.
        </p>
        <p style="color: #555; text-align: left; line-height: 1.5; margin-bottom: 20px;">
          User_Name: ${name}
        </p>
        <p style="color: #555; text-align: left; line-height: 1.5; margin-bottom: 20px;">
          User_Email: ${email}
        </p>
        <p style="color: #555; text-align: left; line-height: 1.5; margin-bottom: 20px;">
          Message: ${message}
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailToUser);
    console.log("Email sent: ", info.response);
    res.status(200).send("Thanks for contacting us.");

    const admin = await transporter.sendMail(mailToAdmin);
    console.log("Email sent to admin: ", admin.response);

  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
};



// ....................................................................................
export const SendConfirmSlotMessage = async (session) => {

  const mailToUser = {
    from: process.env.EMAIL,
    to: session.email,
    subject: "Message from Psychobeings",
    html: `
     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center;">
  <!-- Company Logo -->
  <img src="https://i.ibb.co/ZdPGNn2/logo2.png" alt="Pshycobeings" style="width: 150px; height: auto; margin-bottom: 20px;" />

  <!-- Heading -->
  <h2 style="color: #333; margin-bottom: 10px;">Session Booking Confirmation</h2>

  <!-- Message Content -->
  <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
    Dear User,
  </p>
  <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
    Your session has been successfully booked. Here are the details of your booking:
  </p>

  <!-- Session Details -->
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: left;">
    <p style="margin: 5px 0; color: #333;"><strong>📅 Date: ${modifyDate(session.date)} </p>
    <p style="margin: 5px 0; color: #333;"><strong>⏰ Time Slot: ${session.sessionTime}</p>
    <p style="margin: 5px 0; color: #333;"><strong>📍 Location: <strong>Bangalore, India</strong></p>
  </div>

  <!-- Closing Message -->
  <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
    Thank you for choosing us. If you have any further queries, feel free to reach out.  
  </p>

  <!-- Footer -->
  <p style="color: #777; font-size: 12px; margin-top: 20px;">
    Sincerely,<br />
    <strong>Pshycobeings Team</strong>
  </p>
</div>

    `,
  };



  try {
    const info = await transporter.sendMail(mailToUser);
    console.log("Email sent on booking: ", info.response);
    res.status(200).send("Session booked successfully.")


  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
};
