const numberRepository = require("../../../domain/contracts/number.repository");

class GetOddNumbers {
    getOddNumbers(number) {
        return numberRepository.getAllOddNumbers(number);
    }

}
module.exports = GetOddNumbers;