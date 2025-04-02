// Función para mostrar/ocultar el contenido desplegable
function toggleDropdown() {
    const content = document.getElementById("navbar");
    content.style.display = content.style.display === "block" ? "none" : "block";
}

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    const dropdown = document.querySelector('.header');
    const content = document.getElementById("navbar");
    if (!dropdown.contains(event.target)) {
        content.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    // Al hacer clic en el icono del menú, mostrar u ocultar el navbar
    menuIcon.addEventListener("click", () => {
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "block";
        } else {
            navbar.style.display = "none";
        }
    });
});
