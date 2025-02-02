document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const additionalInfo = this.nextElementSibling; // Find the next element (additional information)
            if (additionalInfo.style.display === "none" || additionalInfo.style.display === "") {
                additionalInfo.style.display = "block"; // Show additional information
                this.textContent = "Hide"; // Change button text to "Hide"
            } else {
                additionalInfo.style.display = "none"; // Hide additional information
                this.textContent = "Read More"; // Change button text back to "Read More"
            }
        });
    });
});
