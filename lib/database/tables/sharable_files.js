module.exports.up = function createTableShared(knex) {
  return knex.schema
    .createTable('shared_files', table => {
      table
        .increments()
        .unsigned()
        .primary();
      table.integer('shared_file_id').notNullable();
      table.integer('user_id').notNullable();
      table.integer('directory_id');
      table.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.foreign('user_id').references('users.id');
    })
    .then(() => 'table shared_files is created')
    .catch(err => new Error(err))
    .finally(() => knex.destroy());
};

module.exports.down = function dropTableShared(knex) {
  return knex.schema.dropTable('shared_files').catch(err => {
    throw err;
  });
};
