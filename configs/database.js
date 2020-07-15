const mongoose = require('mongoose')
const config = require('../configs/app')
const mariaDB = require('mariadb');

const databases = {

  mongoDB(){
    const db = mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true}, error => {
      if (error)  console.error('MongoDB error: ', error)
      console.log("MongoDB connected")
    });
    return db;
  },

  mysql(){
    const connection  = mysql.createPool({
      connectionLimit : 10,
      host            : config.hostname,
      user            : config.username,
      password        : config.password,
      database        : config.database,
      charset         : 'utf8'
    });
    return connection;
  },

  postgresql(){},

  mssql(){},

  maria(){
    const connection = mariaDB.createPool({
      host: config.trustURL,
      user: config.trustUserName,
      password: config.trustPassword,
    });
    return connection;
  },

  sequelize(){
    const Sequelize = require("sequelize");
    const sequelize = new Sequelize('pts_db', config.trustUserName, config.trustPassword, {
      host: config.trustURL,
      dialect: 'postgres',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
    return { Sequelize, sequelize};
  },

}

module.exports = databases;