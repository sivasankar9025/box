

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define valid credentials for admin, staff, and students
    const validCredentials = {
        'kascit': 'kascit@123'
    };

    // Check if username and password are valid
    if (validCredentials[username] === password) {
        // Store username in localStorage
        localStorage.setItem('username', username);

        // Redirect based on username
        if (username === 'kascit' || username === 'kascps') {
            window.location.href = 'https://sankar2.onrender.com';
          }
    } else {
        // Display error message if credentials are invalid
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});

