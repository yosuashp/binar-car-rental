const knex = require('knex');
const knexfile = require('../connection/connect_database');
const { Model } = require('objection');

const db = knex(knexfile.development);
Model.knex(db);

class Car extends Model {
  static get tableName() {
    return 'Mobil';
  }
}

module.exports = { Car, db };

