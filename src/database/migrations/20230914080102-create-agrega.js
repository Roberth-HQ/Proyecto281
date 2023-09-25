'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agregas', {
      id_agrega: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id_usuario',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
      },
      id_contacto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contactos',
          key: 'id_contacto',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Agregas');
  }
};