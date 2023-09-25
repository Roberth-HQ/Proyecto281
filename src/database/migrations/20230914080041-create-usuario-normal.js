'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuario_normals', {
      id_usuario: {
        allowNull: false,
        // autoIncrement: true,
        // primaryKey: true,
        references: {
          model: "Usuarios",
          key: "id_usuario",
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      fecha_registro: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Usuario_normals');
  }
};