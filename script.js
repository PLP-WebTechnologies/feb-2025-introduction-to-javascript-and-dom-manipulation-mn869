// Function to change the text content of a paragraph
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("textParagraph").textContent = "The text has been changed!";
});

// Function to change the background color of the body
document.getElementById("changeColorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

// Function to add a new element (an additional paragraph)
document.getElementById("addElementButton").addEventListener("click", function() {
    // Create a new paragraph element
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added dynamically!";
    
    // Append the new paragraph to the body or a specific section
    document.querySelector("main section").appendChild(newParagraph);
});
