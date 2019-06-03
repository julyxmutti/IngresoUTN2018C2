var mysql = require("mysql");
//objeto creado por nosotros que contiene todos los metodos de la libreria mysql

var conexion = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "peluqueria",
    "port": 3306
});
conexion.connect((error)=>{
    if (error){
        console.log("Error al conectar");
    } else{
        console.log("Conectando")
    }
})

module.exports = conexion;