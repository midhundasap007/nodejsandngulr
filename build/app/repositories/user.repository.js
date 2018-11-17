"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database/database");
var user = database_1.sequelize.sequelizer.define('user', {
    id: {
        type: database_1.sequelize.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'id',
        autoIncrement: true
    },
    name: {
        type: database_1.sequelize.Sequelize.STRING,
        field: 'name',
        allowNull: false,
    },
    email: {
        type: database_1.sequelize.Sequelize.STRING,
        field: 'email_id',
        allowNull: true,
        defaultValue: null,
    },
    phno: {
        type: database_1.sequelize.Sequelize.INTEGER,
        field: 'phone_no',
        allowNull: true,
        defaultValue: null,
    },
    address: {
        type: database_1.sequelize.Sequelize.STRING,
        field: 'address',
        allowNull: true,
        defaultValue: null
    },
    pass: {
        type: database_1.sequelize.Sequelize.STRING,
        field: 'password',
        allowNull: false,
    },
    status: {
        type: database_1.sequelize.Sequelize.BOOLEAN,
        field: 'status_id',
        allowNull: false,
        defaultValue: true
    },
}, { underscored: true, tableName: 'ms_user', timestamps: true });
//user.sync();
exports.UserRepository = user;
