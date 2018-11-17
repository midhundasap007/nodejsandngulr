"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database/database");
var jobpost = database_1.sequelize.sequelizer.define('employer', {
    id: {
        type: database_1.sequelize.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'id',
        autoIncrement: true
    },
    titile: {
        type: database_1.sequelize.Sequelize.STRING,
        field: 'titile',
        allowNull: false,
    },
    description: {
        type: database_1.sequelize.Sequelize.STRING,
        field: 'description',
        allowNull: true,
        defaultValue: null,
    },
    employer_id: {
        type: database_1.sequelize.Sequelize.INTEGER,
        allowNull: false,
        field: 'employer_id'
    },
    status: {
        type: database_1.sequelize.Sequelize.BOOLEAN,
        field: 'status_id',
        allowNull: false,
        defaultValue: true
    },
}, { underscored: true, tableName: 'ms_jobpost', timestamps: true });
//jobpost.sync();
exports.JobPostRepository = jobpost;
