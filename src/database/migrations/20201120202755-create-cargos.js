'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cargo', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      setor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'setor', key: 'id' }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cargo');
  }
};
