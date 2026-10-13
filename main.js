/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => { 
                        // Aquí tienes acceso al JSON en formato de objeto JS  
    comidas = data;  
    mostrarComidas()                 // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

const container = document.getElementById('comidaContainer');
/*
    for (let i = 0; i < comidas.length; i++) {
      let comida = comidas[i];

      container.innerHTML += `
        <article class="card">
          <h2>${comida.nombre}</h2>
          <p class="provincia">${comida.provincia}</p>
          <p class="ingredientes">${comida.ingredientes}</p>
          <span class="categoria">${comida.categoria}</span>
        </article>
      `;
    }
 */
function mostrarComidas(){
  container.innerHTML=""
  comidas.forEach(comida =>{
    container.innerHTML += `
        <article class="card">
          <h2>${comida.nombre}</h2>
          <p class="provincia">${comida.provincia}</p>
          <p class="ingredientes">${comida.ingredientes}</p>
          <span class="categoria">${comida.categoria}</span>
        </article> `
  })
}

