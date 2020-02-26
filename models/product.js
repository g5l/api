'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    underscored: true,
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};