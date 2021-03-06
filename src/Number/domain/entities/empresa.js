'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      empresa.hasMany(models.sucursal,
        {
            as: 'sucursal',
            foreignKey: 'empresaId',
        }
      );
    }
  };
  empresa.init({
    empresaId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tipoEmpresaId: DataTypes.INTEGER,
    estadoEmpresaId: DataTypes.INTEGER,
    rut: DataTypes.STRING,
    dv: DataTypes.STRING,
    razonSocial: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    bpEmpresa: DataTypes.STRING,
    fono: DataTypes.STRING,
    nombreContacto: DataTypes.STRING,
    apellidoContacto: DataTypes.STRING,
    emailContacto: DataTypes.STRING,
    fonoContacto: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {
  sequelize,
  modelName: 'empresa',
  tableName: 'empresa',
  timestamps: false,
});
return empresa;
};