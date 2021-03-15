const hbs = require ('hbs');
const fs = require('fs');


// EJEMPLO DE FUNCIONES PARA UN CRUD
// hbs.registerHelper('crearCurso', (nom, id, desc, mod, val)=>{
//     if(id){

//         listaCursos = require('./../cursostdea.json');

//         let duplicado = listaCursos.find(elemento => elemento.id==id)
//         if(duplicado){
//             respuesta="Error: Ya ha sido creado un curso con el mismo ID"
//         }else{
//             let curso = {
//                 nombre:nom,
//                 id: id,
//                 descripcion:desc,
//                 modalidad:mod,
//                 valor:val,
//                 estado:"Disponible",
//                 estInscritos:0
//             }
//             listaCursos.push(curso);
//             let datos = JSON.stringify(listaCursos);
//             fs.writeFile('src/cursostdea.json', datos, (err)=>{
//                 if(err) throw (err);
//             })
            
//             respuesta = `<div class="alert alert-info alert-dismissible fade show" role="alert">
//                         El curso ${curso.nombre} ha sido creado
//                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                         </div>`
            
//         }
//         return respuesta;   
//     }
// })

// hbs.registerHelper("listarCursos",()=>{
//     listaCursos = require('./../cursostdea.json');
//     let texto = `<div class="table-responsive"><table class="table"><thead class="table-dark"><th>CURSO</th><th>ID</th><th>VALOR</th><th>MODALIDAD</th><th>MATRICULADOS</th> <th>ESTADO</th><th>ELIMINAR</th></thead><tbody>`
//     listaCursos.forEach(curso => {
//         texto = texto + `<tr><td>${curso.nombre}</td><td>${curso.id}</td><td>${curso.valor}</td><td>${curso.modalidad}</td><td><button type="submit" value="" name="" class="btn btn-sm"><i class="fas fa-eye"></i></button>&nbsp;${curso.estInscritos}</td><td><button type="submit" value="${curso.id}" name="idCamb" class="btn btn-secondary btn-sm"><i class="fas fa-toggle-off"></i></button>&nbsp;${curso.estado}</td><td><button type="submit" value="${curso.id}" name="idDelete" class="btn btn-outline-dark btn-sm"><i class="fas fa-trash-alt"></i></button></td></tr>`
//     });
//     texto = texto + `</tbody></table></div>`
//     return texto; 
// });

// hbs.registerHelper("cambiarEstado",(idCamb)=>{
//    let respuesta ="";
//     if(idCamb){

//         listaCursos = require('./../cursostdea.json');
//         let aModificar = listaCursos.find(elemento => elemento.id==idCamb);

//         if(aModificar.estado=="Disponible"){
//             aModificar.estado="No disponible";
//             respuesta = `<div class="alert alert-success alert-dismissible fade show" role="alert">
//                         El curso ${aModificar.nombre} ya no está disponible.
//                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                  </div>`
//         }else{
//             aModificar.estado="Disponible";
//             respuesta = `<div class="alert alert-success alert-dismissible fade show" role="alert">
//                         El curso ${aModificar.nombre} ahora está disponible.
//                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                  </div>`
//         }
        
//         let datos = JSON.stringify(listaCursos);
//         fs.writeFile('src/cursostdea.json', datos, (err)=>{
//             if(err) throw (err);
//         })
//     }
//     return respuesta
// })

// hbs.registerHelper("eliminarCurso",(idDelete)=>{
//     if(idDelete){
//        listaCursos = require('./../cursostdea.json');
//        let nuevaLista = listaCursos.filter(elemento => elemento.id!=idDelete);
//        let datos = JSON.stringify(nuevaLista);
//            fs.writeFile('src/cursostdea.json', datos, (err)=>{
//                if(err) throw (err);
//            });
//        texto = `<div class="alert alert-info alert-dismissible fade show" role="alert">
//                     El curso ha sido eliminado con exito
//                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                 </div>`
//        return texto; 
//     };
// })