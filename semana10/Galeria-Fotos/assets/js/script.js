//Consumo de API con jQuery

//Obtener urls con id alternativa
function generateUrl() {
    let id = Math.round(Math.random() * 500) + 1;
    return `https://picsum.photos/id/${id}/info`;
  }

//Función paa consumir la api
function getPicture() {
    //Plantilla de ajax con jQuery
    $.ajax({
        type: "GET",
        url: generateUrl(),
        dataType: "json",
        async: true,
        success: function(data) {
            renderPicture(data);
        },    
    });
}

//Función para renderizar la imagen
function renderPicture(data) {
    //Probamos algunos datos
    console.log(data);
    console.log(data.author);

//Creo mi card manipulando el DOM con jQuery
//Creamos un div
let div = $("<div></div>").addClass("card");

//Creamos una imagen y agregamos su src
let img = $("<img />").attr("src",data.download_url).addClass("card-img");
//Agregamos la imagen al div
div.append(img);

//Creamos un h3 y agregamos el autor
let autor = $(`<h3>${data.author}</h3>`).addClass("card-title");
//Agreganos el h3 al div
div.append(autor);

//Agregamos el contenido al pictures container
$("#pictures-container").append(div);
}

$(document).ready(function () {
    //Acá escribo mi código
    for (let i = 0; i < 10; i++) {
        getPicture();
    }
    
})