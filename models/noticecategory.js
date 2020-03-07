'use strict';
module.exports = (sequelize, DataTypes) => {
  const NoticeCategory = sequelize.define('NoticeCategory', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  NoticeCategory.associate = function(models) {
    NoticeCategory.hasMany(models.Notice);
  };
  return NoticeCategory;
};