const files = require('../tables/updateTable/addMemoryFieldToFilesTable');

exports.up = async function(knex) {
  await files.up(knex, 'files');
};

exports.down = async function(knex) {
  await files.up(knex, 'files');
};
