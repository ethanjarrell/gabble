'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.addColumn(
      'likes',
      'userId',{
        type: Sequelize.INTEGER
      }
    )

  },

  down: function (queryInterface, Sequelize) {

    'likes',
    'userId'
  }
};
