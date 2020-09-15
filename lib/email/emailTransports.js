const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const sendgrid = require('nodemailer-sendgrid-transport');

module.exports = {
  sendgrid: nodemailer.createTransport(sendgrid({ auth: { api_key: process.env.EMAIL_KEY } })),
  mailgun: nodemailer.createTransport(
    mailgun({
      auth: {
        api_key: process.env.MAINLGUN_KEY,
        domain: process.env.MAINLGUN_DOMAIN,
      },
    }),
  ),
};
