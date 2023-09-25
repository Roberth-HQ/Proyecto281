"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alerta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Alerta.belongsTo(models.Usuario, {
        foreignKey: "id_usuario",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Alerta.belongsToMany(models.Contacto, {
        through: "Notifica",
        foreignKey: "id_alerta",
      });

      models.Alerta.belongsToMany(models.Institucion_Ayuda, {
        through: "Recibe",
        foreignKey: "id_alerta",
      });
    }
  }
  Alerta.init(
    {
      id_alerta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fecha: DataTypes.DATE,
      hora: DataTypes.DATE,
      ubicacion: DataTypes.STRING,
      descripcion_incidente: DataTypes.STRING,
      id_usuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Alerta",
      tableName: "Alertas",
    }
  );
  return Alerta;
};
