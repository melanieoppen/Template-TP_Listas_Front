/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas-extended.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => { 
                        // Aquí tienes acceso al JSON en formato de objeto JS  
    comidas = data;  
    mostrarComidas(comidas)                 // Asignar el JSON a la variable comidas
    actualizarFiltros()
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

  const ingredientesInputs = document.querySelectorAll(".ingrediente")
  let ingredientes = []
  
  ingredientesInputs.forEach(input => {
    ingredientes.push(input.value)
  })
  
    let nuevaComida = {
    nombre: event.target.nombre.value,
    provincia: event.target.provincia.value,
    ingredientes: ingredientes,
    categoria:event.target.categoria.value
  }
  comidas.push(nuevaComida) /* es para agregar un elemento más a la lista de comidas*/
  
  mostrarComidas(comidas)

  ingredientesContainer.innerHTML = 
  '<input type="text" class="ingrediente" placeholder="Ingredientes" required>';
  
  event.target.reset()
});
  // alert("Comida agregada: " + event.target.nombre.value);

const filtroCategoria = document.getElementById("filtroCategoria")
const filtroProvincia = document.getElementById("filtroProvincia")
const busqueda = document.getElementById("buscador")

function filtrar(){
let comidasFiltradas = comidas.filter(comida => {
  return comida.categoria.includes(filtroCategoria.value)
      && comida.provincia.includes(filtroProvincia.value)
})

mostrarComidas(comidasFiltradas)
}

function buscar() {
let comidasFiltradas = comidas.filter( comida=> {
  return comida.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
      || comida.provincia.toLowerCase().includes(busqueda.value.toLowerCase())
      || comida.categoria.toLowerCase().includes(busqueda.value.toLowerCase())
})

mostrarComidas(comidasFiltradas)
}
filtroCategoria.addEventListener("change" , filtrar) 
filtroProvincia.addEventListener("change" , filtrar)
busqueda.addEventListener("input", buscar)

const agregarIngredientebtn = document.getElementById("agregarIngrediente")
const ingredientesContainer = document.querySelector(".contenedor-ingredientes")

agregarIngredientebtn.addEventListener("click", () => {
  ingredientesContainer.innerHTML +=
    '<input type="text" class="ingrediente" placeholder="Ingredientes" required>';
});

function actualizarFiltros() {
  let categorias = []
  comidas.forEach(comida => {
    if( !categorias.includes(comida.categoria)) {
    categorias.push(comida.categoria)
    }
  });
  let provincias = []
  comidas.forEach(comida => {
    if( !provincias.includes(comida.provincia)) {
    provincias.push(comida.provincia)
    }
  });
  categorias.forEach(categoria => {
  filtroCategoria.innerHTML += `<option value="${categoria}">${categoria}</option>`
  })
  provincias.forEach(provincia => {
    filtroProvincia.innerHTML += `<option value="${provincia}">${provincia}</option>`
    })
}