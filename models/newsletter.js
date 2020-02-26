'use strict';
module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define('Newsletter', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    underscored: true,
  });
  Newsletter.associate = function(models) {
    // associations can be defined here
  };
  return Newsletter;
};