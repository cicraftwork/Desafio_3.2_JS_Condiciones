// Ejercicio 1: Imagen con Borde
document.getElementById('imagen-borde').addEventListener('click', function() {
    this.style.border = this.style.border ? '' : '2px solid red';
});

// Ejercicio 2: Stickers
const inputsStickers = document.querySelectorAll('.sticker-input');
const totalStickersParrafo = document.getElementById('total-stickers');

inputsStickers.forEach(input => {
    input.addEventListener('change', calcularTotalStickers);
});

function calcularTotalStickers() {
    const totalStickers = Array.from(inputsStickers)
        .reduce((total, input) => total + (Number(input.value) || 0), 0);

    totalStickersParrafo.textContent = totalStickers <= 10
        ? `Llevas ${totalStickers} stickers`
        : 'Llevas demasiados stickers';
}

// Ejercicio 3: Password
document.getElementById('boton-password').addEventListener('click', function() {
    const pass1 = document.getElementById('pass1').selectedOptions[0].text;
    const pass2 = document.getElementById('pass2').selectedOptions[0].text;
    const pass3 = document.getElementById('pass3').selectedOptions[0].text;

    const password = pass1 + pass2 + pass3;
    const resultadoPassword = document.getElementById('resultado-password');

    if (password === '911') {
        resultadoPassword.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultadoPassword.textContent = 'Password 2 es correcto';
    } else {
        resultadoPassword.textContent = 'Password incorrecto';
    }
});