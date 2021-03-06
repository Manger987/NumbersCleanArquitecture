'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Visita.hasMany(models.actividad,
        {
          as: 'actividad',
          foreignKey: 'visitaId',
        }
      );
      Visita.belongsTo(models.sucursal,
        {
            as: 'sucursal',
            foreignKey: 'sucursalId',
        }
      );
      Visita.belongsTo(models.experto,
        {
          as: 'experto',
          foreignKey: 'expertoId'

        }
      );
    }
  };
  Visita.init({
    visitaId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cargaMasivaId: DataTypes.INTEGER,
    fechaCreacion: DataTypes.DATE,
    sucursalId: DataTypes.INTEGER,
    expertoId: DataTypes.INTEGER,
    anulada: DataTypes.BOOLEAN,
    anuladaConfirm: DataTypes.BOOLEAN,
    motivoAnulacion: DataTypes.STRING,
    justificacionAnulacion: DataTypes.STRING,
    fechaAnulacion: DataTypes.DATE,
    deleted: DataTypes.BOOLEAN,
    fechaPlanificacion: DataTypes.DATE,
    descripcion: DataTypes.STRING,
    observacion: DataTypes.STRING,
    programada: DataTypes.BOOLEAN,
    finalizada: DataTypes.BOOLEAN,
    TipoAsignacionId: DataTypes.INTEGER,
    fechaPlanificacionFin: DataTypes.DATE,
    observacionRevertir: DataTypes.STRING,
    estadoId: DataTypes.INTEGER,
    fechaModificacion: DataTypes.DATE,
    plazoEjecucion: DataTypes.DATE,
    fechaInicio: DataTypes.DATE,
    latitudInicio: DataTypes.DECIMAL,
    longitudInicio: DataTypes.DECIMAL,
    latitudFin: DataTypes.DECIMAL,
    longitudFin: DataTypes.DECIMAL,
    fechaFin: DataTypes.DATE,
    Version: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'visita',
    tableName: 'visita',
    timestamps: false,
  });
  
  return Visita;
};