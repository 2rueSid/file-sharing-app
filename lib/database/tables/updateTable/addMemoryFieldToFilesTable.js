module.exports.up = function updateLinksTable(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.integer('memory').notNull();
  });
};

module.exports.down = function dropLinksUpdate(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.dropColumn('memory');
  });
};
