
const axios = require('axios').default;

const dataReturn = require('../../../application/mappers/dataReturns');

const {
    getOddNumbers,
    GetSumOddNumbers,
    GetTrivia
} = require("../../../application/use_cases");

class NumerosController {
    constructor({ dataDictionary }) {
        // this._VisitaRepository = VisitaRepository;
        this._getOddNumbers = new getOddNumbers;
        this._getSumOddNumbers = new GetSumOddNumbers;
        this._getTrivia = new GetTrivia;
    }

    async getOddNumbers(req, res) {
        try {
            const { number } = req.params;
            return res.send(dataReturn(await this._getOddNumbers.getOddNumbers(number)));
        } catch (err) {
            console.log("Error in getOddNumbers: ", err);
            return res.send(dataReturn(err, 500, err.message))
        }
    }
    async getSumOddNumbers(req, res) {
        try {
            const { number } = req.params;
            return res.send(dataReturn(await this._getSumOddNumbers.getSumOddNumbers(number)));
        } catch (err) {
            console.log("Error in getSumOddNumbers: ", err);
            return res.send(dataReturn(err, 500, err.message))
        }
    }
    async getTriviaToSingleNumber(req, res) {
        try {
            const { number } = req.params;
            return res.send(dataReturn(await this._getTrivia.GetTriviaBySingleNumber(number)));
        } catch (err) {
            console.log("Error in getTriviaToSingleNumber: ", err);
            return res.send(dataReturn(err, 500, err.message))
        }
    }
}

module.exports = NumerosController;