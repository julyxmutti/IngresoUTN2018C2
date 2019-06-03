

var express = require('express');
var router = express.Router();
var db = require('./BD/bd');
var md5 = require('md5');

//.query
//localhost:3000/login/
router.get('/', (req, res, next) => {
    res.render('login', {mensaje: 'Bienvenida'});

});
router.get('/logout', (req, res, next)=>{
    req.session.destroy();
    res.redirect('/login');
})
router.post('/inicio', (req, res) =>{
    var datos = {
        usuario : req.body.usuario,
        password : req.body.password,
    }

    //.query (2 o mas parametros)
    db.query(" select * from usuarios where usuario='"+datos.usuario+"' and password = '"+datos.password+"' ",(err, rows) => {
        if(err){
            console.log(err); //DE LADO DEL SERVIDOR LOS CONSELE.LOG se visualizan eb la terminal
        } else {
            //cuantos registros nos devuelve esta consulta
            //SQL nos devuelve un array de objetos
            console.log(rows); //rows es el objeto que contiene el resultado de la consulta del query
            //array de objetos
            if(rows.length > 0){
                //hay match
            
                req.session.usuario = rows[0].id_usuario;
                res.redirect('/panel');

            }else {
                //usuario o contra incorrecto
                res.render('login',{mensaje: "Usuario o contraseña incorrecto"});
            }
        } 

    });
    //QUERY : SELECT * from usuarios where and 
});



module.exports = router;