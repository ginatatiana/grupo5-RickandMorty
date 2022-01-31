// URL de la API a consumir
const API = "https://rickandmortyapi.com/api/character";

//Ejecutar y consumir API
const getData = (api) => {
return fetch(api)
.then((response) => response.json())
.then((json) => {
    llenarDatos(json), paginacion(json.info);
})
.catch((error) => {
    console.log("Error: ", error)
});
} 
// LLenar cards con personajes
const llenarDatos = (data) => {
    let html = "";
    data.results.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width:10rem">';
        html += `<img src="${pj.image}" class="card-img-top">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += `<p class="card-text">${pj.species}</p>`;
        html += `<p class="card-text">${pj.status}</p>`;
        html += `<p class="card-text">${pj.gender}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    document.getElementById("datosPersonajes").innerHTML = html;
    }
    

// Paginacion
const paginacion = (info) => {
 let html = "";
html += `<li class="page-item ${info.prev ? "" : "disabled"}"> <a class="page-link" onclick="getData('${info.prev}')">Prev</a> </li>`;
html += `<li class="page-item ${info.next ? "" : "disabled"}"> <a class="page-link" onclick="getData('${info.next}')">Next</a> </li>`;
document.getElementById("paginacion").innerHTML = html;
}


//Ejecutar API
getData(API);

//Prueba de Git 
