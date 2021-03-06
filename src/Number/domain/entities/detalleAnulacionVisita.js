'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class detalleAnulacionVisita extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    detalleAnulacionVisita.init({
        detalleAnulacionVisitaId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        visitaId: DataTypes.INTEGER,
        fechaCreacion: {
            allowNull: true,
            defaultValue: DataTypes.NOW,
            type: DataTypes.DATE
        },
        motivo: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        latitud: DataTypes.DECIMAL,
        longitud: DataTypes.DECIMAL,
        archivo: DataTypes.BOOLEAN,
        solicitudId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'detalleAnulacionVisita',
        tableName: 'detalleAnulacionVisita',
        timestamps: false,
    });
    return detalleAnulacionVisita;
};