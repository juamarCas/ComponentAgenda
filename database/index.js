const mysql = require('mysql');
const {database} = require('../databaseKeys'); 
const {promisify} = require('util'); 

const pool = mysql.createPool(database);

pool.getConnection((err, connection) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED'); 
        }

        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS MANY CONECTIOS');
        }

        if(err.code === 'ECONNREFUSED'){
            console.log('DATABAS CONNECTION WAS REFUSED');
        }
    }
    if(connection) connection.release();
    console.log('DB is connected'); 

    return;
}); 


pool.query = promisify(pool.query); 
module.exports = pool;