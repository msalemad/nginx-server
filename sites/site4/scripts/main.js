// Este archivo contiene el JavaScript específico para el cuarto sitio web (site4).
// Aquí puedes agregar funciones y lógica que se ejecutarán en el sitio web.

document.addEventListener('DOMContentLoaded', function() {
    // Esta función se ejecuta cuando el contenido del DOM ha sido completamente cargado.
    console.log('¡Bienvenido al sitio 4!'); // Mensaje de bienvenida en la consola.

    // Ejemplo de una función que cambia el color de fondo al hacer clic en un botón.
    const button = document.getElementById('changeColorButton');
    if (button) {
        button.addEventListener('click', function() {
            document.body.style.backgroundColor = getRandomColor(); // Cambia el color de fondo.
        });
    }

    // Función para generar un color aleatorio en formato hexadecimal.
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color; // Devuelve el color generado.
    }
});