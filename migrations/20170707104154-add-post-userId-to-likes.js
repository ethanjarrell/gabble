'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.addColumn(
      'likes',
      'post_userId',{
        type: Sequelize.INTEGER
      }
    )

  },

  down: function (queryInterface, Sequelize) {

    'likes',
    'post_userId'
  }
};
