module.exports = (to, from, variables) => {
  return {
    to,
    from,
    subject: 'activate your account',
    html: `
        <h1>Hi ${variables.userName}! your account has been successfully created </h1>
        <hr />
        <p>before continue you must to activate your account.</p>
        <p>Follow that link below, to activate. </p>
        <a href="http://localhost:3000/activate/${variables.link}">
        http://localhost:3000/activate/${variables.link}</a>
    `,
  };
};
