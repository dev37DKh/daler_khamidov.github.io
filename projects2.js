document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const additionalInfo = this.nextElementSibling; // Finde das nächste Element (zusätzliche Informationen)
            if (additionalInfo.style.display === "none" || additionalInfo.style.display === "") {
                additionalInfo.style.display = "block"; // Zeige zusätzliche Informationen
                this.textContent = "Verbergen"; // Ändere den Text der Schaltfläche auf "Verbergen"
            } else {
                additionalInfo.style.display = "none"; // Verberge zusätzliche Informationen
                this.textContent = "Mehr lesen"; // Ändere den Text der Schaltfläche zurück auf "Mehr lesen"
            }
        });
    });
});
