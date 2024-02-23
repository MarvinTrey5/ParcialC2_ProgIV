function cambiarColorLetra() {
    cambiarEstiloCSS("#art1", "color", getRandomColor());
}

function cambiarColorFondoDiv() {
    cambiarEstiloCSS("#art1", "background-color", getRandomColor());
}

function cambiarColorBorde() {
    cambiarEstiloCSS("#art1", "border-color", getRandomColor());
}

function cambiarEstiloCSS(selector, estilo, valor) {
    const styleElement = document.createElement("style");
    styleElement.appendChild(document.createTextNode(`${selector} { ${estilo}: ${valor};}`));
    document.head.appendChild(styleElement);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarColorBody() {
    const body = document.querySelector('body');
    const colores = ['red', 'green', 'blue', 'purple', 'orange'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    body.style.color = colorAleatorio;
  }
  
  function CrearBorde() {
    const div = document.querySelector('.ParrafoE');
    div.style.border = '5px solid #ff0000';
  }
  
  function CambiarImagen() {
    const imagenActual = document.querySelector('.art2 .foto');
    imagenActual.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/306_f2.png';
    const botonImagen = document.createElement('button');
botonImagen.textContent = 'Cambiar imagen';
botonImagen.addEventListener('click', cambiarImagen);

articulo.insertBefore(botonImagen, primerBoton);
  }
const section = document.querySelector('section');

const newDiv = document.createElement('div');

newDiv.textContent = 'Este es un nuevo contenido agregado dinámicamente';

section.append(newDiv);