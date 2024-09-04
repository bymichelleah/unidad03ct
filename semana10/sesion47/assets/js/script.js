/*//Objetos literales
//Declaramos nuestro objeto
//estructura de clave valor
const persona = {
    nombre: "Michelle",
    apellido: "Alanya",
    edad: 18,
    dni_cedula: "70490148", //snake case
    hobbies: ["basquet","arte","dormir"],
    licencia_conducir: true,
};
//Mostramos el objeto
console.log(persona);

//Acceder o modificar un objeto
//objeto.clave = valor; notacion de punto
//objeto["clave"] = valor; notacion de corchetes

//Accedemos a una propiedad
//console.log(persona[0]); //esto da undefined
console.log(persona.nombre);
console.log(persona["nombre"]);
//console.log(persona.dni-cedula); //esta da error debido al guion
console.log(persona["dni_cedula"]);
console.log(persona.dni_cedula);

//Agregar propiedades

persona.correo = "micorreo@gmail.com";
//Mostramos el objeto
console.log(persona);

//Modificar propiedades
persona.correo = "michhah@gmail.com";
//Mostramos el objeto
console.log(persona);*/

//Traer datos en Json
