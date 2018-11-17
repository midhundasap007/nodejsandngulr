import {sequelize} from '../database/database'

  let jobapplication = sequelize.sequelizer.define('jobapplication', {
    id: {
      type: sequelize.Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id',
      autoIncrement: true
    },
    user_id: {
        type: sequelize.Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id'
      },
      jobpost_id: {
        type: sequelize.Sequelize.INTEGER,
        allowNull: false,
        field: 'jobpost_id'
      },
    status: {
      type: sequelize.Sequelize.BOOLEAN,
      field: 'status_id',
      allowNull: false, 
      defaultValue: true
    },
  },{underscored: true, tableName:'ms_jobapplication', timestamps: true});

  //jobapplication.sync();
export const JobApplicationRepository = jobapplication;