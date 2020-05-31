var msql = require('mysql');

function createBDConnection(){
    return msql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database: 'payfast'
    });
}

module.exports = function(){
    return createBDConnection;
}