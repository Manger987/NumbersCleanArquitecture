module.exports = (data, code, message) => {
    let dataReturn = {};
    dataReturn.code = code != undefined ? code : 200;
    dataReturn.status = (dataReturn.code !== 200) ? false : true;
    dataReturn.message = (message != undefined) ? message : '';
    dataReturn.results = data ? data : {};
    return dataReturn;
}