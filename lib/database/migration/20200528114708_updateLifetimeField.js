const linksTable = require('../tables/updateTable/lifeTimeToString');

exports.up = async function(knex) {
  await linksTable.up(knex, 'links');
};

exports.down = async function(knex) {
  await linksTable.up(knex, 'links');
};
