const { GetSumOddNumbers } = require("../../../Number/application/use_cases");

this._getSumOddNumbers = new GetSumOddNumbers;

describe('get odd numbers', () => {
  it('matches to equal 17', () => {
    this._getSumOddNumbers.getSumOddNumbers(7).then(data =>{
      expect(data).toEqual(17);
    })
    
  });
});