"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Asiste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Asiste.belongsTo(models.Administrador, {
        foreignKey: "id_administrador",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });

      models.Asiste.belongsTo(models.Denuncia, {
        foreignKey: "id_denuncia",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  Asiste.init(
    {
      id_asiste: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_administrador: DataTypes.INTEGER,
      id_denuncia: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Asiste",
    }
  );
  return Asiste;
};
