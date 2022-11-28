let fs=require("fs")
function importar(marca){
   let formatojson1 = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras1.json","utf-8"))
   let formatojson2 = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras2.json","utf-8"))
   let formatojson3 = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras3.json","utf-8"))
   return todosLosJuguetes = [...formatojson1, ...formatojson2, ...formatojson3].filter(function(element){
             return element.marca == marca
   })
}
//console.log(importar("Star Wars"))


module.exports = importar 