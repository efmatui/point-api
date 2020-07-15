const databases = require("../configs/database");

let db = databases.sequelize();

db.point = require("./point.model.js")(db.sequelize, db.Sequelize);

module.exports = db;