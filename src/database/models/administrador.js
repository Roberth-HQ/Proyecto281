"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Administrador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Administrador.hasMany(models.Usuario_normal, {
        foreignKey: "id_administrador",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Administrador.hasMany(models.Actividad, {
        foreignKey: "id_administrador",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Administrador.hasMany(models.Recurso, {
        foreignKey: "id_administrador",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Administrador.hasMany(models.Institucion_Ayuda, {
        foreignKey: "id_administrador",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Administrador.belongsToMany(models.Denuncia, {
        through: "Asiste",
        foreignKey: "id_administrador",
      });

      models.Administrador.hasMany(models.Comentario, {
        foreignKey: "id_administrador",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Administrador.belongsTo(models.Usuario, {
        foreignKey: "id_usuario", 
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  Administrador.init(
    {
      id_administrador: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_usuario: DataTypes.INTEGER,
      rol: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Administrador",
    }
  );
  return Administrador;
};
