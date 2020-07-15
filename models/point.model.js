module.exports = (sequelize, Sequelize) => {
  const point = sequelize.define("point", {}, {freezeTableName: true});
  return point;
};