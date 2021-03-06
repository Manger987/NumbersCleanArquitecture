'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sucursal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sucursal.hasMany(models.visita,
        {
          as: 'visita',
          foreignKey: 'sucursalId',
        }
      );
      sucursal.belongsTo(models.empresa,
        {
          as: 'empresa',
          foreignKey: 'empresaId',
        }
      );
    }
  };
  sucursal.init({
    sucursalId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    empresaId: DataTypes.INTEGER,
    criticidadId: DataTypes.INTEGER,
    tipoSucursalId: DataTypes.INTEGER,
    alias: DataTypes.STRING,
    bpSucursal: DataTypes.STRING,
    direccion: DataTypes.STRING,
    email: DataTypes.STRING,
    fono: DataTypes.STRING,
    nombreContacto: DataTypes.STRING,
    apellidoContacto: DataTypes.STRING,
    emailContacto: DataTypes.STRING,
    fonoContacto: DataTypes.STRING,
    latitud: DataTypes.DECIMAL,
    longitud: DataTypes.DECIMAL,
    deleted: DataTypes.BOOLEAN,
    rut: DataTypes.STRING,
    dv: DataTypes.STRING,
    numeroDireccion: DataTypes.STRING,
    numeroDepartamento: DataTypes.STRING,
    estadoVigenciaId: DataTypes.INTEGER,
    cuv: DataTypes.STRING,
    comuna: DataTypes.STRING,
    region: DataTypes.STRING,
    fechaActualizacion: DataTypes.DATE,
    masaTrabajadores: DataTypes.INTEGER,
    sectorEconomico: DataTypes.INTEGER,
    tasaAccidentabilidad: DataTypes.DECIMAL,
    tasaSiniestrabilidad: DataTypes.DECIMAL,
    segmentoId: DataTypes.INTEGER,
    carterizacionId: DataTypes.INTEGER,
    nombreRepresentanteLegal: DataTypes.STRING,
    apellidoRepresentanteLegal: DataTypes.STRING,
    emailRepresentanteLegal: DataTypes.STRING,
    fonoRepresentanteLegal: DataTypes.STRING,
    Version: DataTypes.BIGINT,
    contactoComercialId: DataTypes.INTEGER,
    rutPreventivo: DataTypes.INTEGER,
    dvPreventivo: DataTypes.STRING,
    rutRepLegal: DataTypes.INTEGER,
    dvRepLegal: DataTypes.STRING,
    generoRepLegal: DataTypes.INTEGER,
    generoPreventivo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'sucursal',
    tableName: 'sucursal',
    timestamps: false,
  });
  return sucursal;
};