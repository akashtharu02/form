// JavaScript for enhancing form functionality

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {

    // Form validation before submission
    document.querySelector('form').addEventListener('submit', function(event) {
        let formValid = true; // Initialize form validity

        // Validate the password field
        const passwordInput = document.getElementById('password');
        if (passwordInput.value.length < 6) { // Check if password is at least 6 characters
            formValid = false; // Set form validity to false
            alert('Password must be at least 6 characters long.'); // Alert user
            passwordInput.focus(); // Focus on the password field
        }

        if (!formValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Real-time update of progress bar based on form completion
    const inputs = document.querySelectorAll('input, textarea, select'); // Select all form inputs
    const progress = document.getElementById('progress'); // Select the progress bar element

    function updateProgress() {
        let filled = 0; // Initialize count of filled fields
        inputs.forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                if (input.checked) filled++; // Count checked checkboxes and radio buttons
            } else if (input.value.trim() !== '') {
                filled++; // Count filled inputs
            }
        });
        const percentage = (filled / inputs.length) * 100; // Calculate completion percentage
        progress.value = percentage; // Update progress bar value
    }

    inputs.forEach(input => {
        input.addEventListener('input', updateProgress); // Update progress on input change
    });

    // Dynamic change of background color based on satisfaction level
    const satisfactionInput = document.getElementById('satisfaction'); // Select satisfaction input
    satisfactionInput.addEventListener('input', function() {
        document.body.style.backgroundColor = `hsl(${satisfactionInput.value * 12}, 100%, 95%)`; // Change background color
    });

    // Dynamic suggestions based on input in the browser field
    const browserInput = document.getElementById('browser'); // Select browser input
    browserInput.addEventListener('input', function() {
        const suggestionBox = document.querySelector('#browsers'); // Select datalist element
        if (browserInput.value.toLowerCase() === 'chrom') {
            suggestionBox.innerHTML = '<option value="Chrome">'; // Suggest Chrome
        } else if (browserInput.value.toLowerCase() === 'firef') {
            suggestionBox.innerHTML = '<option value="Firefox">'; // Suggest Firefox
        } else if (browserInput.value.toLowerCase() === 'safa') {
            suggestionBox.innerHTML = '<option value="Safari">'; // Suggest Safari
        } else if (browserInput.value.toLowerCase() === 'edg') {
            suggestionBox.innerHTML = '<option value="Edge">'; // Suggest Edge
        } else {
            suggestionBox.innerHTML = `
                <option value="Chrome">
                <option value="Firefox">
                <option value="Safari">
                <option value="Edge">`; // Provide default suggestions
        }
    });
});
