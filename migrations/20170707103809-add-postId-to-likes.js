'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.addColumn(
      'likes',
      'postId',{
        type: Sequelize.INTEGER
      }
    )

  },

  down: function (queryInterface, Sequelize) {

    'likes',
    'postId'
  }
};
