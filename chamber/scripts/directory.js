document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const menuButton = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("primary-nav");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Load members and spotlight
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
    
    // Display all members
    displayMembers(members);
    
    // Display spotlight members
    displaySpotlight(members);
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

function displaySpotlight(members) {
    const spotlightContainer = document.getElementById("spotlight");
    spotlightContainer.innerHTML = "";

    // Filter for Gold and Silver members
    const spotlightMembers = members.filter(member => 
        member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );

    // Shuffle and select up to 3 members
    const selectedSpotlights = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    selectedSpotlights.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" width="120">
            <h3>${member.name}</h3>
            <p><strong>Level:</strong> ${member.membershipLevel}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        spotlightContainer.appendChild(card);
    });
}

const apiKey = "d7b550e8f4fcd45a1601942facd66407"; // OpenWeatherMap API key
const city = "Kwekwe";
const countryCode = "ZW";

async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector("#city-details .card:nth-child(2)").innerHTML = `
            <h3>Current Weather</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
            <img src="${iconsrc}" alt="${data.weather[0].description}">
        `;
    } catch (error) {
        console.error("Weather data fetch failed:", error);
    }
}

async function fetchWeatherForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const forecastElement = document.querySelector("#city-details .card:nth-child(3)");

        forecastElement.innerHTML = `<h3>Weather Forecast</h3>`;
        for (let i = 0; i < 3; i++) {
            const forecast = data.list[i * 8]; // Every 24 hours
            forecastElement.innerHTML += `
                <p>Day ${i + 1}: ${forecast.main.temp}°C, ${forecast.weather[0].description}</p>
            `;
        }
    } catch (error) {
        console.error("Weather forecast fetch failed:", error);
    }
}

// Call weather functions
fetchWeather();
fetchWeatherForecast();

// Navigation highlighting
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
