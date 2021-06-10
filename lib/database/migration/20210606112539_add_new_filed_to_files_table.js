const files = require('../tables/updateTable/addNewFieldFiles');

exports.up = async function(knex) {
  await files.up(knex);
};

exports.down = async function(knex) {
  await files.down(knex);
};
