module.exports = (to, from, variables) => {
  return {
    to,
    from,
    subject: 'reset password',
    html: `
          <h1>Reset password </h1>
          <hr />
          <p>Follow that link below, to reset your password. </p>
          <a href="http://localhost:8080/auth/reset-password/${variables.link}">
          http://localhost:8080/auth/reset-password/${variables.link}</a>
      `,
  };
};
