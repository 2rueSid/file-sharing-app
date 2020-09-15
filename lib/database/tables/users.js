module.exports.up = function createUserTable(knex) {
  return knex.schema
    .createTable('users', table => {
      table
        .increments()
        .unsigned()
        .primary();
      table.string('first_name').notNull();
      table.string('last_name').notNull();
      table.string('email').notNull();
      table.string('password').notNull();
      table.boolean('is_active').defaultTo(0);
      table.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .then(() => 'table users is created')
    .catch(err => {
      throw err;
    })
    .finally(() => knex.destroy());
};

module.exports.down = function dropUsersTable(knex) {
  return knex.schema.dropTable('users').catch(err => {
    throw err;
  });
};
