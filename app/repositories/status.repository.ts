import {sequelize} from '../database/database'

  let status = sequelize.sequelizer.define('status', {
    id: {
      type: sequelize.Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id',
      autoIncrement: true
    },
    status: {
        type: sequelize.Sequelize.STRING,
        allowNull: false,
        field: 'status'
      },
  
  },{underscored: true, tableName:'ms_status', timestamps: true});

  //status.sync();
export const StatusRepository = status;