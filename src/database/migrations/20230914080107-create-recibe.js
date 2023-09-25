"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Recibes", {
      id_recibe: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_inst_ayuda: {
        type: Sequelize.INTEGER,
        references: {
          model: "Institucion_Ayudas",
          key: "id_inst_ayuda",
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
      },
      id_alerta: {
        type: Sequelize.INTEGER,
        references: {
          model: "Alertas",
          key: "id_alerta",
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Recibes");
  },
};
