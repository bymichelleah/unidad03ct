//Modificación de arrays

//.map (funcion)
//El metodo map() crea un nuevo array con los resultados de la llamada a la
//funcion indicada aplicando a cada uno de sus elementos

//1 -> dado el siguiente array de numeros crear un nuevo array con cada uno de los numeros multiplicando por 2

/*let nums = [1, 2, 3, 4, 5];
console.log(nums);

//Con bucles

 let numsPorDos = [];
for (let num of nums) {
numsPorDos.push (num *2);
} 

//Usando map
let numsPorDos = nums.map((n) => n * 2);

console.log(numsPorDos);
//El arreglo original no se modifica
console.log(nums);

//2 -> dado el siguiente array de objetos, crear un nuevo array con cada uno de los elementos al cuadrado
//2 -> dado el siguiente array de strings, crear un nuevo array indicando que elementos estan en mayuscula
//(true) y cuales en miniscula (false)
/*console.log (2);
let letras = ["a","B","c","D","e"]; //[false, true, false, true, false]

let sonMayusculas = letras.map((c)=> {
    return c.toUpperCase() == c;
});

console.log (sonMayusculas);

// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta:
// Si la palabra tiene más de 7 letras se pondrá "palabra larga", 
//en caso contrario se pondrá "palabra corta"
console.log (3);
let palabras = [
    "hola",
    "computadora",
    "casa",
    "programacion",
    "javascript",
    "ciclo",
  ];
// ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]
  let palabrasSize = palabras.map((palabra) => {
    if (palabra.length > 7) {
      return "palabra larga";
    }

      return "palabra corta";
    });
  console.log(palabrasSize);


// .reduce()
// El metodo reduce() aplica una funcion a un acumulador
//y a cada valor de un array (de izquierda a derecha)
//para reducirlo a un único valor

// 4 ---> Dado el siguiente array de numeros, sumar 
//todos los numeros

const nums = [1,2,3,4,5] ;
console.log(nums);

let suma = nums.reduce((a,b) => a + b, 0);

console.log(suma);

// 5 ---> usando el mismo array, multiplicar todos 
//los numeros

let multiplicacion = nums.reduce((a,b) => a*b, 1);
console.log(multiplicacion);


//.sort (funcionDeComparacion)
//El metodo sort() ordena los elementos de un arreglo (array)
//localmente y devolver el arreglo ordenado. La admiracion no es
//necesariamente estable. El modo de ordenación por defecto repsonde
//a la posicion del valor del string de cada elemento en Unicode

let puntos = [11,2,1,21,23,10];
console.log(puntos);

//Ordene el arreglo por defecto
puntos.sort();
console.log("Ordenando por defecto");
console.log(puntos);

//Ordenamiento numerico estricto
puntos.sort ((a,b) => a-b);
console.log("Ordenando numero estricto");
console.log(puntos);


// .reverse()
//El metodo reverse() invierte el orden de los elementos de un 
// array in place. El primer elemento paasa a ser el ultimo y el ultimo
//pasa a aver el primero.

const arr = [true, 1, "hola", 54.76, "a"];
console.log(arr);

//Revertimos el arreglo
arr.reverse();
console.log(arr);*/


//split()
//El metodo split() divide se objeto de tipo String en un array(vector)
//de cadenas mediante la separación de la cadena en subcadenas.

console.log ("split");
const frase = "Boa noite pra voces";
console.log(frase);

//Creamos el array usando el espacio como separador
let palabras = frase.split(" ");
console.log(palabras);

const csv = "Peru,Argentina,Chile,Colombia";
console.log(csv);

//Creamos el array usando la coma (,) como separador
let paises = csv.split(",");
console.log(paises);

//join()
//El metodo join() une a todos los elementos de un array en una 
//cadena y devuekve esta cadena. Por defecto
//los elementos se separan con una coma (",").
console.log("join");

let strPalabras = palabras.join(" ");
console.log(strPalabras);

let strPaises = paises.join();

console.log(strPaises);
