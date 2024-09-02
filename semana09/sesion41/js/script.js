/*
// Métodos de arrays

let nums = [1, 2, 3, 4, 5];

console.log(nums);

//arr.push(x) => agrega el valor x al final del array

nums.push(6);
console.log(nums);
nums.push("dcbjkdahcs");
console.log(nums);

//arr.pop() -> elimina el último elemento del array

nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

//arr.unshift => agrega el valor x al inicio del array
console.log("unshift");
nums.unshift(0);
console.log(nums)

//arr.shift => eliminar el primer elemento del array
console.log("shift");
nums.shift("shift");
console.log(nums);


let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

console.log("slice");
let subnums1 = nums.slice(0, 3);

console.log(subnums1);
console.log(nums);

//Ejercicios
//Crea el subarray [3, 4, 5, 6] a partir de nums

let subnums2 = nums.slice(2, 6);
console.log(subnums2);
*/

//arr.splice(start, deleteCount, item1, item2, ...)
// Elimina elementos del array y opcionalmente agrega nuevos elementos
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Valor de inicio
console.log("Solo valor de inicio");
let subarr1 = nums.splice(2);
console.log(subarr1);
//El array oriinal se ve modificado (lo que sobra del subarray)

//Reasigno el array
console.log("Reasignamos el array")
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Ahora eliminamos elementos
console.log("Eliminando elementos")
//Se queda con dos elementos dle subarray
let subarr = nums.splice(2, 2);
console.log(subarr);
console.log(nums);

//Reasignamos el array
console.log("Reasignamos el array");
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Ahora agregando elementos
console.log("Agregando elementos");
//Agrega elementos
let subarr3 = nums.splice(2, 3, "a", "b", true, 1334, "hola");
console.log(subarr3);
console.log(nums);