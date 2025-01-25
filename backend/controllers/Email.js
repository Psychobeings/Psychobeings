import nodemailer from "nodemailer";
import Session from "../models/session_model.js";
import dotenv from 'dotenv';

const modifyDate = (e) => {
  const date = new Date(e);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};


// const modifyDate = (e) => {
//   const date = new Date(e);
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// };
dotenv.config();
// console.log(process.env.EMAILADD)



const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "rishabhsharma919319@gmail.com",
    pass: process.env.EmailPass,
  },
});

//..............................Send Message.....................................
export const SendMessage = async (req, res) => {

  const { name, email, message } = req.body;
  console.log(req.body );

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


