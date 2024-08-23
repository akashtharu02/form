
    // JavaScript program to create a live hacker theme effect with random falling characters

    // Get the canvas element and its 2D drawing context using the new id
    const canvas = document.getElementById('background-canvas'); // Updated id
    const ctx = canvas.getContext('2d');

    // Set the canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define the characters to use in the falling effect
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const lettersArray = letters.split('');

    // Set font size and columns based on screen width
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array to hold the Y coordinate of the drops
    const drops = [];

    // Initialize the drops array with zeros
    for (let i = 0; i < columns; i++) {
        drops[i] = 0;
    }

    // Function to draw the characters
    function draw() {
        // Set the background color with opacity to create a fading trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set the color and font for the characters
        ctx.fillStyle = '#0F0'; // Green color for the characters
        ctx.font = `${fontSize}px monospace`; // Use a monospace font for a hacker-like appearance

        // Loop through the drops array
        for (let i = 0; i < drops.length; i++) {
            // Select a random character from the letters array
            const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];

            // Draw the character at the current drop position
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop to the top randomly or move the drop down
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Move the drop down
            drops[i]++;
        }
    }

    // Function to continuously draw the falling characters
    setInterval(draw, 33); // Run the draw function every 33 milliseconds

    // Adjust the canvas size when the window is resized
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
