const links = require('../tables/updateTable/changeLinkField');

exports.up = async function(knex) {
  await links.up(knex);
};

exports.down = async function(knex) {
  await links.down(knex);
};
