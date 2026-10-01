let comidas = [];

const container = document.getElementById('comidaContainer');

fetch('./data/comidas.json')
  .then(response => response.json())
  .then(data => {
    comidas = data;

    for (let i = 0; i < comidas.length; i++) {
      let comida = comidas[i];

      container.innerHTML += `
        <article class="card">
          <h2>${comida.nombre}</h2>
          <p>${comida.provincia}</p>
          <span class="categoria">${comida.categoria}</span>
        </article>
      `;
    }
  })
  .catch(error => console.error('Error al leer el JSON:', error));