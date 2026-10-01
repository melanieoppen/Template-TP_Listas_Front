/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comida = [];

const container = document.getElementById("comidaContainer");

for (let i = 0; i < comidas.length; i++) {
comidaContainer.innerHTML +=
`
<article class="card">
 <h2>${comida[1].nombre}
 <p>${comida[1].provincia}</p>;
<span class="categoria">${comida[1].categoria}</span>
</article>
`;
}