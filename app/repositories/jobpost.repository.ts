import {sequelize} from '../database/database'

  let jobpost = sequelize.sequelizer.define('employer', {
    id: {
      type: sequelize.Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id',
      autoIncrement: true
    },
    titile: {
      type: sequelize.Sequelize.STRING,
      field: 'titile',
      allowNull: false, 
    },
    description: {
      type: sequelize.Sequelize.STRING,
      field: 'description',
      allowNull: true, 
      defaultValue: null,
    },
    employer_id: {
        type: sequelize.Sequelize.INTEGER,
        allowNull: false,
        field: 'employer_id'
      },
    status: {
      type: sequelize.Sequelize.BOOLEAN,
      field: 'status_id',
      allowNull: false, 
      defaultValue: true
    },
  },{underscored: true, tableName:'ms_jobpost', timestamps: true});

  //jobpost.sync();
  
export const JobPostRepository = jobpost;