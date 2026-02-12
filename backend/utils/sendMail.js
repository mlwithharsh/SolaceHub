const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "origa.net04@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export const sendNotification = async (subject, html) => {
  try {
    await transporter.sendMail({
      from: "SolaceHub <origa.net04@gmail.com>",
      to: "origanet04@gmail.com",
      subject,
      html
    });

    console.log("📧 Email sent successfully");
  } catch (err) {
    console.error("❌ Email failed:", err);
  }
};
