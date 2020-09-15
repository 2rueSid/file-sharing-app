module.exports.up = function updateLinksTable(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.integer('directory_id')
      .unsigned()
      .alter();
    t.foreign('directory_id')
      .references('directory.id')
      .onDelete('CASCADE');
  });
};

module.exports.down = function dropLinksUpdate(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.integer('directory_id').alter();
    t.dropForeign('directory_id');
  });
};
