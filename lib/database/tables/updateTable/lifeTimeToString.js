module.exports.up = function updateLinksTable(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.string('lifetime')
      .defaultTo(null)
      .alter();
  });
};

module.exports.down = function dropLinksUpdate(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.time('lifetime', { precision: 5 })
      .defaultTo(null)
      .alter();
  });
};
