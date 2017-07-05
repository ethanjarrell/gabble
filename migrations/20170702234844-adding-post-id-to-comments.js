'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.addColumn(
      'comments',
      'postId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "posts",
          key: "id"
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.removeColumn(
      'comments',
      'postId'
    )
  }
};
