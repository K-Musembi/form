document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            signupForm.submit();
        }
    });

    function validateForm() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('passwd').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Regular expression for password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!firstName || firstName.length < 3) {
            alert('First Name must contain at least 3 characters.');
            return false;
        }

        if (!lastName || lastName.length < 3) {
            alert('Last Name must contain at least 3 characters.');
            return false;
        }

        if (!email || !email.match(emailRegex)) {
            alert('Please enter a valid Email Address.');
            return false;
        }

        if (!password || !password.match(passwordRegex)) {
            alert('Password must contain at least 6 characters, including upper and lower case letters, a number, and a symbol.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match.');
            return false;
        }

        return true;
    }
});

