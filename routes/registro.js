var express = require('express');
var router = express.Router();
var bd = require("./BD/bd");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Bienvenido a la pelu, registrate' });
});
router.post('/',(req,res,next)=>{
    var usuario = req.body.usuario;
    var password = req.body.password;

    var dato = {
        usuario : req.body.usuario,
        password : req.body.password,
        confirmar : 0
    }


    bd.query("insert into usuarios set ?",dato,(err,row)=>{
        if(err)
            console.log(err);
        else
            res.render("registro",{mensaje:"Registro exitoso"});
    })
    // bd.query("insert into usuarios (usuario, password, confirmar) values ('"+usuario+"', '"+password+"', 0)", (err,rows)=>{
    //     if(err){
    //         console.log(err);
    //     } else {
    //         res.render("registro" , {mensaje:"Registro exitoso"});
    //     }
    // });
});

module.exports = router;