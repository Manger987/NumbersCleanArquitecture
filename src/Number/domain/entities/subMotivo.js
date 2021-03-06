'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subMotivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      subMotivo.hasMany(models.actividad,
        {
            as: 'subMotivo',
            foreignKey: 'subMotivoId',
        }
      );
    }
  };
  subMotivo.init({
    subMotivoId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    motivoId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    codigo: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    opcionAnular: DataTypes.BOOLEAN,
    tipoFormulario: DataTypes.STRING,
    informacionComplementariaResumen: DataTypes.STRING,
    informacionComplementariaLink: DataTypes.STRING,
    descripcionEmpresa: DataTypes.STRING,
    informacionComplementariaResumenEmpresa: DataTypes.STRING
  }, {
  sequelize,
  modelName: 'subMotivo',
  tableName: 'subMotivo',
  timestamps: false,
});
return subMotivo;
};