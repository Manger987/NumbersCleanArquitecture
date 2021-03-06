//ORM Working here
const axios = require('axios').default;
const dataDictionary = require("../../application/dataDictionary");

const getAllOddNumbers = async (number) => {
  const oddsNumbers = [];
  for (let n = parseInt(number); n >= 2; --n) {
    if (n % 2 !== 0 || n === 2) {
      oddsNumbers.push(n);
    }
  }
  return oddsNumbers;
};

const getSumAllOddNumbers = async (number) => {
  let sumaNumeros = 0;
  for (let n = parseInt(number); n >= 2; --n) {
    if (n % 2 !== 0 || n === 2) {
      sumaNumeros = n + sumaNumeros;
    }
  }
  return sumaNumeros;
};

const getTriviaBySingleNumber = async (number) => {
  const api = `http://${process.env.TRIVIA_HOST}/${number}/trivia?notfound=floor&fragment`;
  return axios.get(api)
  .then(response => response.data)
  .catch(err => err)
};

module.exports = {
  getAllOddNumbers,
  getSumAllOddNumbers,
  getTriviaBySingleNumber
};
