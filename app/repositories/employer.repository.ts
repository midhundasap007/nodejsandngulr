import {sequelize} from '../database/database'

  let employer = sequelize.sequelizer.define('employer', {
    id: {
      type: sequelize.Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id',
      autoIncrement: true
    },
    name: {
      type: sequelize.Sequelize.STRING,
      field: 'name',
      allowNull: false, 
    },
    email: {
      type: sequelize.Sequelize.STRING,
      field: 'email_id',
      allowNull: true, 
      defaultValue: null,
    },
    phno: {
      type: sequelize.Sequelize.INTEGER,
      field: 'phone_no',
      allowNull: true,
      defaultValue: null,
    },
    address: {
      type: sequelize.Sequelize.STRING,
      field: 'address',
      allowNull: true, 
      defaultValue: null
    },
    pass: {
      type: sequelize.Sequelize.STRING,
      field: 'password',
      allowNull: false, 
    },
    status: {
      type: sequelize.Sequelize.BOOLEAN,
      field: 'status_id',
      allowNull: false, 
      defaultValue: true
    }
  },{underscored: true, tableName:'ms_employer', timestamps: true});
 
export const EmployerRepository = employer;
