'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notice = sequelize.define('Notice', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    article: DataTypes.TEXT,
    notice_category_id: {
      type: DataTypes.INTEGER,
      references: 'notice_categories',
      referencesKey: 'id'
    },
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