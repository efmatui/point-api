module.exports = (sequelize, Sequelize) => {
  const point = sequelize.define("point", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    partnerId: {
        field: 'partner_id',
        type: Sequelize.INTEGER,
    },
    ratio: {
        type: Sequelize.INTEGER,
    },
    merchantId: {
      field: 'merchant_id',
      type: Sequelize.INTEGER,
    }},
  {
    tableName: 'point',
    timestamps: false,
    freezeTableName: true
  });
  return point;
};