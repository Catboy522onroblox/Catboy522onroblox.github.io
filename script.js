document.addEventListener("DOMContentLoaded", function() {
    const contentSections = document.querySelectorAll('.content');

    contentSections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Set your start date here (in the format: "YYYY-MM-DD")
    const startDateString = '2024-01-20';
    const startDate = new Date(startDateString);

    // Function to calculate the difference in days
    function calculateDays() {
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - startDate.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    }

    // Update the days counter on page load
    updateDaysCounter();

    // Function to update the days counter
    function updateDaysCounter() {
        const daysCounterElement = document.getElementById('daysCounter');
        if (daysCounterElement) {
            const daysDifference = calculateDays();
            daysCounterElement.textContent = daysDifference;
        }
    }

    // Update the days counter every 24 hours
    setInterval(updateDaysCounter, 24 * 60 * 60 * 1000);
});

// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add code here to handle form submission, like sending data to a server or displaying a confirmation message.
    alert('Form submitted successfully!');
});

