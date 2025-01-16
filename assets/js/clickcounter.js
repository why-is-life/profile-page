// Initialize click counter
let clickCount = 0;

// Get the clickable image and counter elements
const image = document.getElementById("clickable-image");
const counterElement = document.getElementById("counter");


// Add an event listener to the image to update the counter on click
image.addEventListener("click", function() {
    clickCount++; // Increment the counter
    counterElement.textContent = clickCount; // Update the displayed count

    // Enlarge the image on click
    image.style.transform = "scale(1.05)"; // Enlarge image
    setTimeout(function() {
        image.style.transform = "scale(1)"; // Reset to normal size after animation
    }, 100); // Duration matches the transition time
});