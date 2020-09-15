module.exports.up = function createTableDirectory(knex) {
  return knex.schema
    .createTable('directory', table => {
      table
        .increments()
        .unsigned()
        .primary();
      table.string('directory_name');
      table
        .integer('father_directory')
        .defaultTo(null)
        .nullable();
      table.integer('user_id');
      table.dateTime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.foreign('user_id').references('users.id');
      table.index(['father_directory', 'user_id'], 'fatherId_userId');
    })
    .then(() => 'table directory is created')
    .catch(err => new Error(err))
    .finally(() => knex.destroy());
};

module.exports.down = function dropTableDirectory(knex) {
  return knex.schema.dropTable('directory').catch(err => {
    throw err;
  });
};
