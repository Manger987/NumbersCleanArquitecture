'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VisitaAgenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VisitaAgenda.hasMany(models.visitaAgendaFecha,
        {
          as: 'visitaAgendaFecha',
          foreignKey: 'visitaAgendaId',
        }
    );
    }
  };
  VisitaAgenda.init({
    visitaAgendaId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    visitaId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    observacion: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    fechaModificacion: DataTypes.DATE,
    deleted: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'visitaAgenda',
    tableName: 'visitaAgenda',
    timestamps: false,
  });
  return VisitaAgenda;
};