document.addEventListener("DOMContentLoaded", async function () {
    const testimonialsContainer = document.createElement("section");
    testimonialsContainer.classList.add("testimonials-container");

    try {
        const response = await fetch("data/testimonial.json");
        if (!response.ok) {
            throw new Error("Failed to load testimonials.");
        }
        const testimonials = await response.json();

        testimonials.forEach(({ name, testimonial, source, icon }) => {
            const testimonialCard = document.createElement("div");
            testimonialCard.classList.add("testimonial-card");

            testimonialCard.innerHTML = `
                <div class="testimonial-header">
                    <img src="images/${icon}" alt="${source}" class="testimonial-icon">
                    <h3>${name}</h3>
                </div>
                <p class="testimonial-text">"${testimonial}"</p>
                <p class="testimonial-source">- via ${source}</p>
            `;

            testimonialsContainer.appendChild(testimonialCard);
        });

        document.querySelector("main").appendChild(testimonialsContainer);
    } catch (error) {
        console.error(error);
        document.querySelector("main").innerHTML =
            "<p class='error-message'>Unable to load testimonials. Please try again later.</p>";
    }
});
