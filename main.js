 // Function to add HTML content into the div with class 'content'  
 function addHTMLContent() {  
    // Select the first element with the class 'content'  
    const contentDiv = document.querySelector('.content');  

    // Define the HTML to be added  
    const newHTML = `  
    <input >
    `;  

    // Insert the HTML into the div  
    contentDiv.innerHTML += newHTML; // Use += to add it at the end  
}  

// Call the function to add the HTML content  
addHTMLContent();  