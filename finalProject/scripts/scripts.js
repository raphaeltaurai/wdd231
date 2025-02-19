
// Navigation highlighting
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Hamburger menu functionality
    const menuButton = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("primary-nav");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Footer updates
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});