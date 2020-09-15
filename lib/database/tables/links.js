module.exports.up = function createLinks(knex) {
  return knex.schema
    .createTable('links', table => {
      table
        .increments()
        .unsigned()
        .primary();
      table.string('data').notNullable();
      table.time('lifetime', { precision: 5 }).defaultTo(null);
      table.string('link').notNullable();
      table.integer('type').notNullable();
      table.dateTime('created_at');
      table.timestamp('updated_at');
      table.unique('link');
      table.index(['link', 'type'], 'link_type');
    })
    .then(() => 'table links is created')
    .catch(err => {
      throw err;
    })
    .finally(() => knex.destroy());
};

module.exports.down = function dropLinks(knex) {
  return knex.schema.dropTable('links').catch(err => {
    throw err;
  });
};
