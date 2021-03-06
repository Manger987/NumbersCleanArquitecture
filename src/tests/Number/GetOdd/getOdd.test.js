const { getOddNumbers } = require("../../../Number/application/use_cases");

this._getOddNumbers = new getOddNumbers;

describe('get odd numbers', () => {
  const expected = [7, 5, 3, 2];
  it('matches even with an unexpected number 7', () => {
    this._getOddNumbers.getOddNumbers(7).then(data =>{
      expect(data).toEqual(
        expect.arrayContaining(expected),
      );
    })
    
  });
});