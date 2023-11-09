// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       host: 'localhost',
//       user: 'postgres',
//       password: 'password',
//       database: 'binar-challenge5',
//     },
//     migrations: {
//       directory: './src/handler/db-handler/config/migrations'
//     },
//   },
//   // Add configuration for other environments (e.g., production, staging) if needed.
// };

exports.up = function (knex) {
  return knex.schema.createTable('Mobil', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('size');
    table.integer('rent_per_day');
    table.string('image_id');
    table.string('image_url');
    table.timestamp('createdAt').defaultTo(knex.fn.now()); // Set default value for createdAt
    table.timestamp('updatedAt').defaultTo(knex.fn.now()); // Set default value for updatedAt
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Mobil');
};
