const share = require('../tables/updateTable/timestamp');

exports.up = async function(knex) {
  await share.up(knex, 'shared_files');
};

exports.down = async function(knex) {
  await share.down(knex, 'shared_files');
};
