document.addEventListener("DOMContentLoaded", function () {
    let fireText = document.getElementById("fire-text");
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");

    // Change text to "Let's Begin" after 1 second
    setTimeout(() => {
        fireText.innerText = "Let's Begin";
    }, 1000);

    // Ensure content fades in and remains visible
    setTimeout(() => {
        loader.style.display = "none"; // Hide loader
        content.style.display = "block"; // Make sure content is displayed
        setTimeout(() => {
            content.classList.add("fade-in"); // Start fade-in animation
        }, 10); // Small delay to let display change take effect
    }, 2000);
});
