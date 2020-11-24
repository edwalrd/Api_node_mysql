
const mysql = require('mysql');

const conexion = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'juego'
});

conexion.connect(error  =>{

    if (error ) throw error ;
    
    console.log("conexion bien");
    
   
});

module.exports = conexion;