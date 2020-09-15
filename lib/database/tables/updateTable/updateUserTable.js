module.exports.up = function updateUserTable(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.dropColumn('first_name');
    t.dropColumn('last_name');
    t.string('name').defaultTo('');
  });
};

module.exports.down = function dropUserUpdate(knex, tableName) {
  return knex.schema.alterTable(tableName, t => {
    t.string('first_name').notNull();
    t.string('last_name').notNull();
    t.dropColumn('name');
  });
};
