//ORM Working here

const sequelize = require('sequelize');
const { Op } = require("sequelize");
const dataDictionary = require("../../application/dataDictionary");
const Historial = require('../../../../config/system/db').historial

sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

const registerLog = async (log) => {

    return await Historial.create(log)
        .then(logReturn => logReturn)
        .catch(error => { throw new Error(error) });
}

module.exports = {
    registerLog
};