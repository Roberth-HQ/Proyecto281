"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Contacto.belongsTo(models.Usuario, {
        foreignKey: "id_usuario",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Contacto.belongsToMany(models.Alerta, {
        through: "Notifica",
        foreignKey: "id_contacto",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Contacto.belongsToMany(models.Usuario, {
        through: "Agrega",
        foreignKey: "id_contacto",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  Contacto.init(
    {
      id_contacto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre_contacto: DataTypes.STRING,
      fecha_ac: DataTypes.DATE,
      telefono: DataTypes.STRING,
      id_usuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Contacto",
    }
  );
  return Contacto;
};
