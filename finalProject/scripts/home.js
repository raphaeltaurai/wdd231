document.addEventListener("DOMContentLoaded", () => {
    fetch("data/services.json")
        .then(response => response.json())
        .then(data => {
            displayRandomServices(data);
        })
        .catch(error => console.error("Error loading services:", error));
});

function displayRandomServices(services) {
    const container = document.getElementById("services-container");

    // Shuffle and get three random services
    let randomServices = services.sort(() => 0.5 - Math.random()).slice(0, 3);

    randomServices.forEach(service => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card");

        serviceCard.innerHTML = `
            <img src="images/${service.image}" alt="${service.name}">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p><strong>Price:</strong> ${service.price}</p>
        `;

        container.appendChild(serviceCard);
    });
}
