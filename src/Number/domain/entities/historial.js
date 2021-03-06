'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Historial extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    };
    Historial.init({
        historialId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        estadoId: DataTypes.INTEGER,
        tipoEntidad: DataTypes.INTEGER,
        entidadId: DataTypes.BIGINT,
        fecha: DataTypes.DATE,
        userEmail: DataTypes.STRING,
        observacion: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'historial',
        tableName: 'historial',
        timestamps: false,
    });
    return Historial;
};