'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VisitaAgendaFecha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VisitaAgendaFecha.belongsTo(models.visitaAgenda,
        {
          as: 'visitaAgenda',
          foreignKey: 'visitaAgendaId',
        }
    );
    }
  };
  VisitaAgendaFecha.init({
    visitaAgendaFechaId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    visitaAgendaId: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    rango: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    fechaModificacion: DataTypes.DATE,
    deleted: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'visitaAgendaFecha',
    tableName: 'visitaAgendaFecha',
    timestamps: false,
  });
  return VisitaAgendaFecha;
};