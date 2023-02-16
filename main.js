alerta("Bienvenidos");

class producto{
    constructor( nombre){
        this.nombre=nombre;

    }
    get_datos(){
        console.log("clientes")
        console.log("nombre", this.get_datos.nombre);
        console.log("");
    }

}

let clientes = [];
function cargaclientes (){
    let nombre= prompt("Ingrese su nombre");
    let cliente= new cliente (nombre);
    cliente.push (cliente);
    let nuevaopcion= prompt ("que servicio desea 1)Novia 2)Quinceañera 3)Graduada 4)Sesion fotografica 5)social");
    if (nuevaopcion==1){
        cargarclientes();
    }
}
let opcion = prompt(" 1) Registrarse, 2)Salir");
while (opcion == 2) {
    alert ("Gracias por su tiempo");
    break;
}
 if (opcion == 1) {
    cargaclientes();

 }

 for (let cliente of clientes){
    console.log(cliente.get_datos());
 }
 