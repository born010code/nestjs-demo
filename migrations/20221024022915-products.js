'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = exports.up = function (db, callback) {
  db.createTable('product', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    title: 'string',
    description: 'string',
    price: { type: 'int', defaultValue: 0},
  }, callback);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
