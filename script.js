 // Mostrar el botón cuando el usuario se desplaza hacia abajo
 window.onscroll = function() {
    const btn = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block"; // Mostrar botón
    } else {
        btn.style.display = "none"; // Ocultar botón
    }
};

// Función para volver arriba
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
}