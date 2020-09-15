module.exports.up = function createTableDirectory(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.dateTime('created_at', { precision: 6 })
      .defaultTo(knex.fn.now(6))
      .alter();
    t.timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .alter();
  });
};

module.exports.down = function dropTableDirectory(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.dateTime('created_at').alter();
    t.timestamp('updated_at').alter();
  });
};
