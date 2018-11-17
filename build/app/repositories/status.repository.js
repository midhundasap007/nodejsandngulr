"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database/database");
var status = database_1.sequelize.sequelizer.define('status', {
    id: {
        type: database_1.sequelize.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'id',
        autoIncrement: true
    },
    status: {
        type: database_1.sequelize.Sequelize.STRING,
        allowNull: false,
        field: 'status'
    },
}, { underscored: true, tableName: 'ms_status', timestamps: true });
//status.sync();
exports.StatusRepository = status;
