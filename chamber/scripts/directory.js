document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const menuButton = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("primary-nav");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Load members
    fetchMembers();

    // View toggle functionality
    document.getElementById("grid-view").addEventListener("click", () => {
        document.getElementById("member-list").classList.remove("list");
    });

    document.getElementById("list-view").addEventListener("click", () => {
        document.getElementById("member-list").classList.add("list");
    });

    // Footer updates
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});

// Fetch and display members
async function fetchMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const container = document.getElementById("member-list");
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" width="150">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        container.appendChild(card);
    });
}
