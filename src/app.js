//REQUIRES
const express = require ("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require ('./helpers/helpers')

//DIRECTORIOS
const dirPartials = path.join(__dirname, '../template/partials');
const dirPublic = path.join(__dirname, '../public'); 
const dirViews = path.join(__dirname, '../template/views'); 

// USAR BODYPARSER 
app.use(bodyParser.urlencoded({extended: false}));

//SERVIDOR
app.use(express.static(dirPublic));
app.listen(3000,()=>{
    console.log("listen on port 3000")
})

//HBS
app.set ('view engine', 'hbs');
app.set ('views', dirViews);
hbs.registerPartials(dirPartials);

//PAGINAS
app.get('/',(req,res)=>{
    res.render('index',{
        bienvenida:"Bienvenido a nuestra página"
    });
});

// EJEMPLO CON POST
// app.post('/inscripcion',(req,res)=>{
//     res.render('index', {
//         ced:req.body.cedula,
//         nom:req.body.nombre,
//         correo:req.body.correo,
//         telefono:req.body.telefono,
//         idcurso:req.body.idCurso
//     });
// });

//ERROR 404
app.get('*', function (req,res){
    res.render('error');
})