const emailTransports = require('./emailTransports');

const EmailMannager = () => {
  return {
    getTransport: vendorName => {
      let transport = null;
      let to = null;
      let from = null;
      let template = null;
      let templateVariables = null;
      const found = Object.keys(emailTransports).find(v => v === vendorName);

      if (found) {
        transport = emailTransports[found];
      } else {
        return { message: 'unknown provider' };
      }

      return {
        setTo: userEmail => {
          to = userEmail;
          return true;
        },
        setFrom: serverEmail => {
          from = serverEmail;
          return true;
        },
        setTemplate: templateName => {
          template = templateName;
          return true;
        },
        setVariables: (variables = {}) => {
          templateVariables = variables;
          return true;
        },
        send: () => {
          return transport.sendMail(template(to, from, templateVariables));
        },
      };
    },
  };
};

module.exports = EmailMannager();
