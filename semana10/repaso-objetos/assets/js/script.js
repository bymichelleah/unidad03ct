//Recordando los objetos
/*const perro = {
    nombre: "Hades",
    raza: "Pug",
    edad: 5,
    es_adoptado: true, //no olvidar el snake case
    actividades: ["correr", "jugar", "comer"],
        amigo : [
            {
                nombre: "Rocky",
                raza: "Pastor Aleman",
             },
             {
                nombre: "Luna",
                raza: "Labrador",
             },
        ],
};

console.log(perro);*/

//Acceder a las propiedades de un objeto

//Actividad

const instrumentos = {
    instrumento: "flauta",
    fabricacion: 1700,
    clasificacion: "viento",
    es_util: true,
    funcion: ["soplar","melodia","ritmo"],
    instrumentos_viento : [
        {
            nombre: "armonica",
            fabricacion: 1700,
        },
        {
            nombre: "saxofon",
            fabricacion: 1600, 
        },
    ],
};

console.log(instrumentos);

//Acceder a las propiedades de un objeto
console.log(instrumentos.instrumento);
console.log(instrumentos["es_uti"]);
console.log(instrumentos.funcion);
console.log(instrumentos.funcion[1]);
console.log(instrumentos.instrumentos_viento);

//como podriamos mostrar por consola 

console.log(instrumentos.instrumentos_viento[1].fabricacion);


//modificar propiedades de un objeto
instrumentos.fabricacion = 1700;
console.log(instrumentos); 
//agregar propiedades a un objeto
instrumentos.color = "blanco";
instrumentos.instrumentos_viento[1].color = "dorada";
console.log(instrumentos); 