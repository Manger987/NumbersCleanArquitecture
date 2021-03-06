'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      actividad.belongsTo(models.visita,
        {
            as: 'actividad',
            foreignKey: 'visitaId',
        }
      );
      actividad.belongsTo(models.subMotivo,
        {
          as: 'subMotivo',
          foreignKey: 'subMotivoId',
        }
      );
    }
  };
  actividad.init({
    actividadId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    visitaId: DataTypes.INTEGER,
    idReferencia: DataTypes.STRING,
    estadoId: DataTypes.INTEGER,
    tipoActividadId: DataTypes.INTEGER,
    motivoId: DataTypes.INTEGER,
    subMotivoId: DataTypes.INTEGER,
    descripcionCorta: DataTypes.STRING,
    descripcionLarga: DataTypes.STRING,
    ordenPrioridad: DataTypes.INTEGER,
    tipoAsignacionId: DataTypes.INTEGER,
    fechaPlanificacion: DataTypes.DATE,
    plazoEjecucion: DataTypes.STRING,
    latitudFinal: DataTypes.DECIMAL,
    longitudFinal: DataTypes.DECIMAL,
    latitudInicio: DataTypes.DECIMAL,
    longitudInicio: DataTypes.DECIMAL,
    direccion: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    fechaInicio: DataTypes.DATE,
    fechaTermino: DataTypes.DATE,
    motivo: DataTypes.STRING,
    justificacion: DataTypes.STRING,
    anulada: DataTypes.BOOLEAN,
    anuladaConfirm: DataTypes.BOOLEAN,
    deleted: DataTypes.BOOLEAN,
    fechaModificacion: DataTypes.DATE,
    Version: DataTypes.BIGINT,
    modoId: DataTypes.INTEGER,
  }, {
  sequelize,
  modelName: 'actividad',
  tableName: 'actividad',
  timestamps: false,
});

return actividad;
};