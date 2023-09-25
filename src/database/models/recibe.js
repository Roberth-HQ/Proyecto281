"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recibe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Recibe.belongsTo(models.Institucion_Ayuda, {
        foreignKey: "id_inst_ayuda",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Recibe.belongsTo(models.Alerta, {
        foreignKey: "id_alerta",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  Recibe.init(
    {
      id_recibe: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_inst_ayuda: DataTypes.INTEGER,
      id_alerta: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recibe",
    }
  );
  return Recibe;
};
