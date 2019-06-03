var express = require('express');
var router = express.Router();
var bd = require("./BD/bd");
/// localhost:3000/panel/all

router.get('/',(req,res,next)=> {
 //   console.log(req.session.usuario);

    if(req.session.usuario) {
    bd.query("select * from usuarios",(err,rows)=> {
        // err : la referencia del error en sql
        // rows -> lo que devolvio la consulta
        if(err){
            console.log(err);
        }else {
            console.log(rows);
            res.render('panel',{dato:rows});
        }
    })
    }else{
        res.redirect("/login");
    }
    
});

router.get('/all',(req,res,next)=> {
    console.log("Hola, entre a /all");
})

module.exports = router;