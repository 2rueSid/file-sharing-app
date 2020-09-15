module.exports.up = function createTableFiles(knex) {
  return knex.schema
    .createTable('files', table => {
      table
        .increments()
        .unsigned()
        .primary();
      table.string('file_name').notNull();
      table.string('file_extension').notNull();
      table.integer('user_id').notNull();
      table.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.foreign('user_id').references('users.id');
    })
    .then(() => 'table files is created')
    .catch(err => new Error(err))
    .finally(() => knex.destroy());
};

module.exports.down = function dropTableFiles(knex) {
  return knex.schema.dropTable('files').catch(err => {
    throw err;
  });
};
