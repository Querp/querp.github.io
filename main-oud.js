// Array of sample words
const words = ["apple", "banana", "orange", "grape", "kiwi", "pear", "pineapple", "strawberry", "watermelon", "blueberry", "documentation", "tutorial", "resource", "guide", "API", "library", "framework", "example", "code", "snippet", "reference", "blog", "article", "repository", "GitHub", "forum", "community", "specification", "help", "demo", "knowledgebase", "FAQ", "cheatsheet", "wiki", "sandbox", "toolkit", "platform", "support", "integration", "module", "template", "plugin", "extension", "widget", "component", "sample", "asset", "workflow", "service", "pattern", "prototype", "utility", "solution", "quack", "quack quack", "waddle", "splish", "splash", "honk", "quack honk"];

// Function to generate random text
function generateRandomText(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        // Select a random word from the array
        const randomIndex = Math.floor(Math.random() * words.length);
        result += words[randomIndex] + ' ';
    }
    return result.trim(); // Remove trailing space
}

// Function to get random Int
function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up minimum value to ensure inclusivity
    max = Math.floor(max); // Round down maximum value to ensure inclusivity
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generate random integer within the range
}







// Get all <a> elements
const links = document.querySelectorAll('a');

// Get element by ID
const descriptionNameBox = document.querySelector('#description-name');
const descriptionLinkBox = document.querySelector('#description-link');
const descriptionBox = document.querySelector('#description');
const descriptionContainer = document.querySelector('#description-container');

// Add event listener to each <a> element
links.forEach(link => {
    link.addEventListener('mouseenter', function(event) {
        // Update elements on hover
        descriptionNameBox.textContent = generateRandomText(getRandomInt(1, 5));
        descriptionLinkBox.textContent = "https://www." + generateRandomText(1) + ".com";
        descriptionBox.textContent = generateRandomText(getRandomInt(5, 75));
        descriptionContainer.style.background = "linear-gradient(to bottom right, rgba(10, 6, 15, 1), rgba(7, 5, 9, 0.95))";
    });    
    link.addEventListener('mouseleave', function(event) {
        // Reset elements
        descriptionNameBox.textContent = "Mouse-over een link.";
        descriptionLinkBox.textContent = "";
        descriptionBox.textContent = "Voor een gratis beschrijving!";
        descriptionContainer.style.background = "linear-gradient(to bottom right, rgba(10, 6, 15, 0.80), rgba(7, 5, 9, 0.70))";
    });
});



console.log("hi?");


// Check A's ID

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor elements inside elements with class 'links'
    const links = document.querySelectorAll('.links a');
    // Select the container element by its ID
    const container = document.getElementById('container');
  
    // Iterate over each link
    links.forEach(link => {
      // Add event listener for mouseenter event
      link.addEventListener('mouseenter', function() {
        // Get the ID of the hovered link
        const linkId = link.id;
        // Log the ID to the console
        console.log(linkId);
      });
    });
  });