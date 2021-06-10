module.exports.up = function updateLinksTable(knex) {
  return knex.raw(`ALTER TABLE files ADD COLUMN file_dest_name varchar(255)`);
};

module.exports.down = function dropLinksUpdate(knex, tableName) {
  return knex.raw(`ALTER TABLE files DROP COLUMN file_dest_name`);
};
