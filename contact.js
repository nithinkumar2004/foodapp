document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseDiv = document.getElementById('response');
    
    // Display the response message
    responseDiv.style.display = 'block';
    responseDiv.textContent = `Thank you, ${name}! We have received your message: "${message}"`;

    // Optionally, clear the form
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
});
