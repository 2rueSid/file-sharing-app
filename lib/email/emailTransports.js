const nodemailer = require('nodemailer');

module.exports = {
  gmail: nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_NAME,
      pass: process.env.GMAIL_PASS,
    },
  }),
};
