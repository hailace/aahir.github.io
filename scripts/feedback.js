
    document.addEventListener('DOMContentLoaded', function() {
        // Add event listener for form submission
        document.getElementById('feedbackForm').addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Get form data
            var formData = new FormData(this);

            // Send form data to the json file
            fetch('users.json', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Display success message
                document.getElementById('messageArea').innerHTML = '<div class="success">Feedback submitted successfully!</div>';
            })
            .catch(error => {
                // Display error message
                document.getElementById('messageArea').innerHTML = '<div class="error">Error occurred: ' + error.message + '</div>';
            });
        });
    });

