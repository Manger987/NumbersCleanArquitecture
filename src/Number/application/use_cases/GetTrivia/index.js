const numberRepository = require("../../../domain/contracts/number.repository");

class GetTrivia {
    GetTriviaBySingleNumber(number) {
        return numberRepository.getTriviaBySingleNumber(number);
    }
}
module.exports = GetTrivia;