"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database/database");
var jobapplication = database_1.sequelize.sequelizer.define('jobapplication', {
    id: {
        type: database_1.sequelize.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'id',
        autoIncrement: true
    },
    user_id: {
        type: database_1.sequelize.Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    jobpost_id: {
        type: database_1.sequelize.Sequelize.INTEGER,
        allowNull: false,
        field: 'jobpost_id'
    },
    status: {
        type: database_1.sequelize.Sequelize.BOOLEAN,
        field: 'status_id',
        allowNull: false,
        defaultValue: true
    },
}, { underscored: true, tableName: 'ms_jobapplication', timestamps: true });
//jobapplication.sync();
exports.JobApplicationRepository = jobapplication;
