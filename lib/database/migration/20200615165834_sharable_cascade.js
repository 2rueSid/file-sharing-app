const shareTable = require('../tables/updateTable/addForeignKeyToSharable');

exports.up = async function(knex) {
  await shareTable.up(knex, 'shared_files');
};

exports.down = async function(knex) {
  await shareTable.up(knex, 'shared_files');
};
