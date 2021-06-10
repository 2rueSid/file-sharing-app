module.exports = (to, from, variables) => {
  return {
    to,
    from,
    subject: 'share file',
    html: `
          <h1>Hi ${variables.userName}! someone want to share a file with you</h1>
          <hr />
          <p>Follow that link below, to get permission. </p>
          <a href="http://localhost:3000/dashboard/share/${variables.link}">
          http://localhost:3000/dashboard/share/${variables.link}</a>
      `,
  };
};
