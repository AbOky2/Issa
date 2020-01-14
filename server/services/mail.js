'use strict'

let nodemailer = require('nodemailer'),
    transport;


module.exports =
{
    sendMail: async (args) => {
        let testAccount = await nodemailer.createTestAccount();

        const from = process.env.MAIL_ADDRR;
        const pass = process.env.MAIL_PASS;
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "SSL0.ovh.net",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: from,
                pass // generated ethereal password
            }
        });

        const info = await transporter.sendMail({ ...args, from });

        console.log("Message sent: %s", info.messageId, testAccount.user);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return info
    }
}