document.addEventListener('DOMContentLoaded', function() {
    const suggestionForm = document.getElementById('suggestionForm');
    const dishesContainer = document.getElementById('dishesContainer');

    // Handle form submission
    suggestionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const dish = document.getElementById('dish').value;
        const description = document.getElementById('description').value;

        // Create a new dish card
        const dishCard = document.createElement('div');
        dishCard.classList.add('dish-card');

        const dishTitle = document.createElement('h3');
        dishTitle.textContent = dish;

        const dishDescription = document.createElement('p');
        dishDescription.textContent = description;

        const dishAuthor = document.createElement('p');
        dishAuthor.textContent = `Suggested by ${name}`;

        // Append the elements to the card
        dishCard.appendChild(dishTitle);
        dishCard.appendChild(dishDescription);
        dishCard.appendChild(dishAuthor);

        // Add the card to the container
        dishesContainer.appendChild(dishCard);

        // Clear the form
        suggestionForm.reset();
    });
});
