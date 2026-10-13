/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => { 
                        // Aquí tienes acceso al JSON en formato de objeto JS  
    comidas = data;  
    mostrarComidas(comidas)                 // Asignar el JSON a la variable comidas
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
function mostrarComidas(lista){
  container.innerHTML=""
  lista.forEach(comida =>{
    container.innerHTML += `
        <article class="card">
          <h2>${comida.nombre}</h2>
          <p class="provincia">${comida.provincia}</p>
          <ul class="ingredientes">
          ${comida.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
          </ul>
          <span class="categoria">${comida.categoria}</span>
        </article> `
  })
}

const agregarComidaForm = document.getElementById("agregarComidaForm")

agregarComidaForm.addEventListener("submit" , (event) => {
  event.preventDefault()

  // alert("Comida agregada: " + event.target.nombre.value);

  let nuevaComida = {
  nombre: event.target.nombre.value,
  provincia: event.target.provincia.value,
  ingredientes: event.target.ingredientes.value.split(","),
  categoria:event.target.categoria.value
}
comidas.push(nuevaComida) /* es para agregar un elemento más a la lista de comidas*/

mostrarComidas(comidas)

event.target.reset()
})

const filtroCategoria = document.getElementById("filtroCategoria")

filtroCategoria.addEventListener("change" , () => {

  let comidasFiltradas = comidas.filter(comida => {
    return comida.categoria.include(filtroCategoria.value)
  })

  mostrarComidas(comidasFiltradas)
})
