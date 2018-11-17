const Sequelize = require('sequelize');

const sequelizer = new Sequelize(process.env.DATABASE_CONNECTION_STRING,{
  logging: false
});


sequelizer
  .authenticate()
  .then(() => {
    sequelizer.sync();
   console.log('Connection has been established successfully.');
  });

  export const sequelize = {sequelizer:sequelizer,Sequelize:Sequelize};