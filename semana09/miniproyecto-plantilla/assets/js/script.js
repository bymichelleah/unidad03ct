//Mini proyecto
//Inicializamos nuestro arreglo con nombres de marcas de vehículos
let cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

//Métodos de array
let btnPush = document.getElementById("btn-push");
//Asignamos la función al botón
btnPush.onclick = funcionPush;

function funcionPush() {
    //Actualizamos el array
    cars.push("lexus");
    //Cargamos las imágenes nuevamente
    mostrarImagenes();
}

//Push
let btnPop = document.getElementById("btn-pop");
//Asignamos la función al botón
btnPop.onclick = funcionPop;

function funcionPop() {
    if(cars.length > 0) {
        //Actualizamos el array
        cars.pop();
        //Cargamos las imágenes nuevamentes
        mostrarImagenes();
    } else {
        alert("No se puede eliminar más elementos ya que el arreglo está vacío");
    }
}

//unshift
let btnUnShift = document.getElementById("btn-unshift");
//Asignamos la función al botón
btnUnShift.onclick = funcionUnshift;

function funcionUnshift() {
    //Actualizamos el array
    cars.unshift("ferrari");
    //Cargamos las imágenes nuevamente
    mostrarImagenes();
}

//Shift
let btnShift = document.getElementById("btn-shift");
//Asignamos la función al botón
btnShift.onclick = funcionShift;

function funcionShift() {
    if(cars.length > 0) {
        //Actualizamos el array
        cars.shift();
        //Cargamos las imágenes nuevamentes
        mostrarImagenes();
    } else {
        alert("No se puede eliminar más elementos ya que el arreglo está vacío");
    }
}


//Slice
let btnSlice = document.getElementById("btn-slice");
btnSlice.onclick = funcionSlice;

function  funcionSlice() {
    let begin = document.getElementById("begin").value;
    let end = document.getElementById("end").value;

    //Nos preguntamos si no son strings vacías
    if (begin != "" && end != "") {
        //Actualizamos el array
        cars = cars.slice(begin, end);
        //Cargamos las imágenes nuevamente
        mostrarImagenes();
    } else {
        alert("Los campos no pueden estar vacíos");
    }
}

//Esta funcion carga las imágenes en el elemento demo
function mostrarImagenes() {
    let text = "";

    for (let car of cars) {
        text += `<img src="./assets/img/${car}.png" alt="${car}" width="100" />`;
    }

    document.getElementById("demo").innerHTML = text;
}

//Mostramos las imágenes al inicio
mostrarImagenes();
