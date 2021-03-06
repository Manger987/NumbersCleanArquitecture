const moment = require("moment");
const historialRepository = require("../../../domain/contracts/historial.repository");
class RegistrarLog {
    constructor(){
        this._HistorialRepository = historialRepository;
    }

    registerLog(log) {
        log.fecha = moment(new Date()).utc().format("YYYY-MM-DD HH:mm");
        return this._HistorialRepository.registerLog(log);
    }

}
module.exports = RegistrarLog;