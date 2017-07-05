'use strict';
module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define('comment', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});

  comment.associate = function(models) {
    comment.belongsTo(models.post,{as : 'post', foreignKey: 'postId'})
  }

  return comment;
};
