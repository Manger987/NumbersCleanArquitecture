const numberRepository = require("../../../domain/contracts/number.repository");

class GetSumOddNumbers {
    getSumOddNumbers(number) {
        return numberRepository.getSumAllOddNumbers(number);
    }

}
module.exports = GetSumOddNumbers;