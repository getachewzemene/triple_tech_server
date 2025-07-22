const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Sale = sequelize.define('Sale', {
    productId: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    totalPrice: { type: DataTypes.FLOAT, allowNull: false },
}, { timestamps: true });

module.exports = Sale;
