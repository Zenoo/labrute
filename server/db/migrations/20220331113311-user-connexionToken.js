'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'connexionToken', {
          type: Sequelize.DataTypes.STRING(50)
        }, { transaction: t })
      ]);
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'connexionToken', { transaction: t }),
      ]);
    });
  }
};
