const EmailMannager = require('../email/main');

module.exports = {
  setDefaults: (transport, to, template, variables) => {
    const emailSender = EmailMannager.getTransport(transport);

    emailSender.setFrom('mekaa2828@gmail.com');
    emailSender.setTemplate(template);
    emailSender.setTo(to);
    emailSender.setVariables(variables);

    return emailSender;
  },
};
