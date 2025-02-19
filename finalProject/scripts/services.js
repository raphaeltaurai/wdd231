// async function fetchServices() {
//     try {
//         const response = await fetch('data/services.json');
//         const services = await response.json();
//         const serviceList = document.getElementById('serviceList');

//         services.forEach(service => {
//             const serviceItem = document.createElement('div');
//             serviceItem.innerHTML = `
//                 <h3>${service.name}</h3>
//                 <p>${service.description}</p>
//                 <p>Price: ${service.price}</p>
//             `;
//             serviceList.appendChild(serviceItem);
//         });
//     } catch (error) {
//         console.error('Error fetching services:', error);
//     }
// }

// document.addEventListener('DOMContentLoaded', fetchServices);

document.addEventListener("DOMContentLoaded", async () => {
    const serviceContainer = document.getElementById("service-list");
    const categoryFilter = document.getElementById("category-filter");
    const modal = document.getElementById("service-modal");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementById("close-modal");
    const visitCountDisplay = document.getElementById("visit-count");

    // Track visits
    let visits = localStorage.getItem("visits") || 0;
    visits++;
    localStorage.setItem("visits", visits);
    if (visitCountDisplay) {
        visitCountDisplay.textContent = `Visits: ${visits}`;
    }

    // Fetch services data
    let services = [];
    try {
        const response = await fetch("data/services.json");
        if (!response.ok) throw new Error("Failed to load services.json");
        services = await response.json();
        displayServices(services);
    } catch (error) {
        console.error("Error loading services: ", error);
    }

    // Display services in cards
    function displayServices(serviceList) {
        serviceContainer.innerHTML = "";
        serviceList.forEach(service => {
            const card = document.createElement("div");
            card.classList.add("service-card");
            card.innerHTML = `
                <img src="images/${service.image}" alt="${service.name}">
                <h3>${service.name}</h3>
                <button class="learn-more" data-id="${service.name}">Learn More</button>
            `;
            serviceContainer.appendChild(card);
        });
    }

    // Filter services by category
    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        const filteredServices = selectedCategory === "all"
            ? services
            : services.filter(s => s.category === selectedCategory);
        displayServices(filteredServices);
    });

    // Open modal on Learn More click
    serviceContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("learn-more")) {
            const serviceName = e.target.dataset.id;
            const service = services.find(s => s.name === serviceName);
            if (service) {
                modalContent.innerHTML = `
                    <h2>${service.name}</h2>
                    <p>${service.description}</p>
                    <p><strong>Price:</strong> ${service.price}</p>
                    <p><strong>Category:</strong> ${service.category}</p>
                    <button id="close-modal">Close</button>
                `;
                modal.style.display = "flex";

                // Attach close event dynamically since we replaced the button
                document.getElementById("close-modal").addEventListener("click", () => {
                    modal.style.display = "none";
                });
            }
        }
    });

    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", async () => {
    const serviceContainer = document.getElementById("service-list");
    const categoryFilter = document.getElementById("category-filter");
    const modal = document.getElementById("service-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalPrice = document.getElementById("modal-price");
    const modalCategory = document.getElementById("modal-category");
    const closeModal = document.getElementById("close-modal");
    const visitCountDisplay = document.getElementById("visit-count");

    // Track visits
    let visits = localStorage.getItem("visits") || 0;
    visits++;
    localStorage.setItem("visits", visits);
    if (visitCountDisplay) {
        visitCountDisplay.textContent = `Site  Visits: ${visits}`;
    }

    // Fetch services data
    let services = [];
    try {
        const response = await fetch("data/services.json");
        if (!response.ok) throw new Error("Failed to load services.json");
        services = await response.json();
        displayServices(services);
    } catch (error) {
        console.error("Error loading services: ", error);
    }

    // Function to display services in cards
    function displayServices(serviceList) {
        serviceContainer.innerHTML = "";
        serviceList.forEach(service => {
            const card = document.createElement("div");
            card.classList.add("service-card");
            card.innerHTML = `
                <img src="images/${service.image}" alt="${service.name}">
                <h3>${service.name}</h3>
                <button class="learn-more" data-id="${service.name}">Learn More</button>
            `;
            serviceContainer.appendChild(card);
        });
    }

    // Filter services by category
    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        const filteredServices = selectedCategory === "all"
            ? services
            : services.filter(s => s.category === selectedCategory);
        displayServices(filteredServices);
    });

    // Open modal when "Learn More" is clicked
    serviceContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("learn-more")) {
            const serviceName = e.target.dataset.id;
            const service = services.find(s => s.name === serviceName);
            if (service) {
                modalTitle.textContent = service.name;
                modalDescription.textContent = service.description;
                modalPrice.textContent = service.price;
                modalCategory.textContent = service.category;
                modal.style.display = "block";
            }
        }
    });

    // Close modal when close button is clicked
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
