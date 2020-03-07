'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notice = sequelize.define('Notice', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    article: DataTypes.TEXT,
    date: DataTypes.DATE,
    categoryId: DataTypes.INTEGER,
    source: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    underscored: true,
  });
  Notice.associate = function(models) {
    Notice.belongsTo(models.NoticeCategory);
  };
  return Notice;
};