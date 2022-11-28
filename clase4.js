let Perfil = "asistente"
switch (Perfil) {
    case "ADMIMNISTRADOR":
    case "Administrador":
    case "administrador":
    console.log ("Usted tiene todos los privilegios de uso del sistema");
    break;
    case "ASISTENTE":
    case "Asistente":
    case "asistente":
    console.log ("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    break;
    case "INVITADO":
    case "Invitado":
    case "invitado":
    console.log ("Usted sólo tiene permisos de consultar datos")
    default: 
    console.log ("debe especificar un perfil válido")
}
//ejercicio 2
let pagoMes = 10000
let consumoKWH = 200
let aumentoDeTarifa = consumoKWH > 300? pagoMes*1.2 : "Mantiene el subsidio";
console.log (aumentoDeTarifa)
//ejercicio 3 
let traductor = "perro"
switch (traductor) {
    case "gato":
    console.log ("cat")
    break;
    case "puerta":
    console.log ("door")
    break;
    case "perro":
    console.log ("dog")
    break;
    case "mesa":
    console.log ("table")
    break;
    case "ventana":
    console.log ("windows")
    break;
    default:
    console.log ("la palabra ingresada es incorrecta")
}
//ejercicio
let valor1 = 2
let valor2 = 3
let operacion = "restar"
switch (operacion) {
    case "sumar":
    console.log (valor1 + valor2)
    break;
    case "restar":
    console.log (valor1 - valor2)
    break;
    case "multiplicar":
    console.log (valor1 * valor2)
    break;
    case "dividir":
    console.log (valor1 / valor2)
    break;
    default:
    console.log ("las operaciones aceptadas son: suma, resta, multiplicación y división")
}
//extra
let altura = 200
let velocidad = 4000
if ((altura >= 150 && altura <= 300) && (velocidad >= 268 && velocidad <= 278)){
console.log ("está listo para atterrizar")
}else{
    console.log ("no está listo")
}
