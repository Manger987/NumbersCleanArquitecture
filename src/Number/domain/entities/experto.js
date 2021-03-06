'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Experto.hasMany(models.visita,
            {
              as: 'visita',
              foreignKey: 'expertoId',
            }
          );
    }
  };
  Experto.init({
    expertoid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    bpExperto: DataTypes.STRING,
    email: DataTypes.STRING,
    tipoProyectoId: DataTypes.INTEGER   
  }, {
    sequelize,
    modelName: 'experto',
    tableName: 'experto',
    timestamps: false,
  });
  return Experto;
};