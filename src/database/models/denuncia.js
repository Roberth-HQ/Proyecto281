"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Denuncia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Denuncia.belongsTo(models.Usuario, {
        foreignKey: "id_usuario",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Denuncia.belongsToMany(models.Administrador, {
        through: "Asiste",
        foreignKey: "id_denuncia",
      });
    }
  }
  Denuncia.init(
    {
      id_denuncia: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre_victima: DataTypes.STRING,
      nombre_agresor: DataTypes.STRING,
      tipo_violencia: DataTypes.STRING,
      tipo_denuncia: DataTypes.STRING,
      fecha: DataTypes.DATE,
      descripcion: DataTypes.STRING,
      pruebas: DataTypes.STRING,
      ubicacion: DataTypes.STRING,
      estado: DataTypes.BOOLEAN,
      id_usuario: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Denuncia",
      tableName: "Denuncias",
    }
  );
  return Denuncia;
};
