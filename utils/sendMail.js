const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your email service provider
    port: 587, // Usually 587 for TLS
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable for security
        pass: process.env.EMAIL_PASS, // Use environment variable for security
    },
});

const sendMail = async ({to, subject, text}) => {
    console.log(process.env.EMAIL_USER)
    console.log(process.env.EMAIL_PASS)
    const mails = {
        from: process.env.EMAIL_USER, // always include 'from'
        to,
        subject,
        text, 
    };
    try {
        await transporter.sendMail(mails);
        return true;
    }
    catch (e) {
        console.log(e);
    }
}


module.exports = sendMail;
