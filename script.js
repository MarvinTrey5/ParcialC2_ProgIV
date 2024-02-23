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
    styleElement.appendChild(document.createTextNode(`${selector} { ${estilo}: ${valor}; }`));
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
