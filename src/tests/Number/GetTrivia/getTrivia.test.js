const { GetTrivia } = require("../../../Number/application/use_cases");

this._getTrivia = new GetTrivia;

const expect = "the number of main stars in the constellations of the Big Dipper and Orion";
describe('get trivia of a number', () => {
  it('matches trivia', () => {
    this._getTrivia.GetTriviaBySingleNumber(7).then(data =>{
      expect(data).toEqual(expect);
    })
    
  });
});