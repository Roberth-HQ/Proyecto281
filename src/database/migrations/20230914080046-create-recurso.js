'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recursos', {
      id_recurso: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      contenido: {
        type: Sequelize.STRING
      },
      visibilidad: {
        type: Sequelize.BOOLEAN
      },
      id_administrador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Administradors',
          key: 'id_administrador',
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
    await queryInterface.dropTable('Recursos');
  }
};