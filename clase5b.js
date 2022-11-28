function callback (tipoHamburguesa, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla){
      let total = 0
    switch (tipoHamburguesa.toLowerCase()) {
        case "carne a la parilla":
           total += 1800 //es lo mismo que total = total + 1800
           break;
        case "pollo":
            total += 1500
            break;
        case "vegetariana":
            total += 1200
            break;
      }
      if (jamon){
        total += 30
      }
      if (queso){
        total += 25
      }
      if (salsa){
        total += 5
      }
      if (mayonesa){
        total += 5
      }
      if (mostaza){
        total += 5
      }
      if (tomate){
        total += 15
      }
      if (lechuga){
        total += 10
      }
      if (cebolla){
        total += 10
      }
     return total
}
function calculo (callback, nombre, apellido, tipoHamburguesa, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla){
    
}