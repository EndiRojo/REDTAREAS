// Función para mostrar/ocultar el contenido desplegable
function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.getElementById("dropdown-content");

    if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    // Al hacer clic en el icono del menú, mostrar u ocultar el navbar
    menuIcon.addEventListener("click", () => {
        navbar.style.display = (navbar.style.display === "block") ? "none" : "block";
    });
});
