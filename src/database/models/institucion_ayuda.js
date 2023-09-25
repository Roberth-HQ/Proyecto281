"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Institucion_Ayuda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Institucion_Ayuda.belongsTo(models.Administrador, {
        foreignKey: "id_administrador",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Institucion_Ayuda.belongsToMany(models.Alerta, {
        through: "Recibe",
        foreignKey: "id_inst_ayuda",
      });
    }
  }
  Institucion_Ayuda.init(
    {
      id_inst_ayuda: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre_institucion: DataTypes.STRING,
      telefono: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      url: DataTypes.STRING,
      id_administrador: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Institucion_Ayuda",
    }
  );
  return Institucion_Ayuda;
};
