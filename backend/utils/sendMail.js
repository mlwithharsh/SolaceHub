const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendNotification = async (subject, html) => {
    try {
        await resend.emails.send({
            from: "SolaceHub <origa.net04@gmail.com>",
            to: process.env.ADMIN_EMAIL,
            subject,
            html,
        });
        console.log(`📧 Email sent: ${subject}`);
    } catch (err) {
        console.error("❌ Email failed:", err.message);
    }
};

module.exports = { sendNotification };
