const userTable = require('../tables/updateTable/updateUserTable');

exports.up = async function(knex) {
  await userTable.up(knex, 'users');
};

exports.down = async function(knex) {
  await userTable.up(knex, 'users');
};
