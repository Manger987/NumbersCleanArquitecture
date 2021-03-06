const { Router } = require('express');

module.exports = function({ NumerosController }) {
    const router = Router();

    router.get('/obtenerNumerosImpares/:number', NumerosController.getOddNumbers.bind(NumerosController))
    router.get('/obtenerSumaNumerosImpares/:number', NumerosController.getSumOddNumbers.bind(NumerosController))
    router.get('/obtenerTriviaNumero/:number', NumerosController.getTriviaToSingleNumber.bind(NumerosController))

    return router;
}