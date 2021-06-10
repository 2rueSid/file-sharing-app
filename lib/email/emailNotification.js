const activationTemplate = require('./templates/activationEmail');
const resetPasswordTemplate = require('./templates/resetTemplate');
const shareByEmailTemplate = require('./templates/shareFileTemplate');
const { setDefaults } = require('../config/config.email');

module.exports = {
  sendAccoutnConfirmation: async (to, variables) => {
    const emailSender = setDefaults('gmail', to, activationTemplate, variables);
    await emailSender.send();
    return true;
  },
  sendResetPassword: async (to, variables) => {
    const emailSender = setDefaults(
      'gmail',
      to,
      resetPasswordTemplate,
      variables
    );
    await emailSender.send();
    return true;
  },
  sendShareByEmail: async (to, variables) => {
    const emailSender = setDefaults(
      'gmail',
      to,
      shareByEmailTemplate,
      variables
    );
    await emailSender.send();
    return true;
  },
};
