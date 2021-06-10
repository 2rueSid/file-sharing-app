module.exports.up = function updateLinksTable(knex) {
  return knex.raw(`ALTER TABLE links MODIFY COLUMN link varchar(520)`);
};

module.exports.down = function dropLinksUpdate(knex, tableName) {
  return knex.raw(`ALTER TABLE links MODIFY COLUMN link varchar(255)`);
};
