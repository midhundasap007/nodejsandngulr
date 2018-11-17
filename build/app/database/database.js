"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var sequelizer = new Sequelize(process.env.DATABASE_CONNECTION_STRING, {
    logging: false
});
sequelizer
    .authenticate()
    .then(function () {
    sequelizer.sync();
    console.log('Connection has been established successfully.');
});
exports.sequelize = { sequelizer: sequelizer, Sequelize: Sequelize };
