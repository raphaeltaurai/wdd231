// JavaScript functions for handling modals and dynamic content

// Function to show a modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        // This runs only on join.html
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(this);

            // Add timestamp manually as a key-value pair
            const timestamp = new Date().toISOString();
            formData.append("timestamp", timestamp);

            // Construct URL parameters manually
            const params = new URLSearchParams();
            formData.forEach((value, key) => {
                params.append(key, value);
            });

            window.location.href = `thankyou.html?${params.toString()}`;
        });
    }

    // This runs only on thankyou.html
    const resultsContainer = document.querySelector("#results");


    if (resultsContainer) {
        const urlParams = new URLSearchParams(window.location.search);

        function show(param) {
            return urlParams.has(param) ? decodeURIComponent(urlParams.get(param)) : "Not provided";
        }

         // Get current date and time
    function getCurrentDateTime() {
        const now = new Date();
        return now.toLocaleString(); // Formats the date and time based on user's locale
    }

        resultsContainer.innerHTML = `
            <p>Name: ${show("first_name")} ${show("last_name")}</p>
            <p>Organization Title: ${show("organization_title")}</p>
            <p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
            <p>Phone: ${show("phone")}</p>
            <p>Business/Organization Name: ${show("organization_name")}</p>
            <p>Membership Level: ${show("membership_level")}</p>
            <p>Business/Organization Description: ${show("business_description")}</p>
            <p>Submission Time: ${getCurrentDateTime()}</p>
        `;
    }

    //Last modified date
    var dateLastModified = document.lastModified;
    document.getElementById('last-modified').innerText = `Last Modified: ${dateLastModified}`;
});
