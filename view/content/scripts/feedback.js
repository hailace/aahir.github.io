"use strict";
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = new FormData(this);
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
            document.getElementById('messageArea').innerHTML = '<div class="success">Feedback submitted successfully!</div>';
        })
            .catch(error => {
            document.getElementById('messageArea').innerHTML = '<div class="error">Error occurred: ' + error.message + '</div>';
        });
    });
});
//# sourceMappingURL=feedback.js.map