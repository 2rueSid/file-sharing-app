const share = require('../tables/updateTable/timestamp');

exports.up = async function(knex) {
  await share.up(knex, 'links');
};

exports.down = async function(knex) {
  await share.down(knex, 'links');
};
