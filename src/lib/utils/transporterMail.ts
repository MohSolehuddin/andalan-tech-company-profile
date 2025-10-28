import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST ?? "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});
