// Function to validate password strength and show feedback
function validatePassword() {
    var password = document.getElementById("password").value;
    var feedback = document.getElementById("password_feedback");

    // Reset feedback
    feedback.innerHTML = "";

    // Check if password meets criteria for a strong password
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    if (strongRegex.test(password)) {
        feedback.innerHTML = "Password is strong.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.If weak your account wont be created.";
        feedback.style.color = "red";
    }
}

// Function to validate if passwords match
function validatePasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var matchFeedback = document.getElementById("password_match_feedback");

    // Reset feedback
    matchFeedback.innerHTML = "";

    if (password !== confirmPassword) {
        matchFeedback.innerHTML = "Passwords do not match.";
        matchFeedback.style.color = "red";
        return false;
    } else {
        matchFeedback.innerHTML = "Passwords match.";
        matchFeedback.style.color = "green";
        return true;
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Validate password strength
    validatePassword();

    // Validate password match
    var passwordsMatch = validatePasswordMatch();

    // If password does not meet criteria or passwords do not match, prevent form submission
    if (!passwordsMatch) {
        return;
    }

    // Proceed with form submission
    document.getElementById("signupForm").submit();
}

// Add event listeners to password input fields
document.getElementById("password").addEventListener("keyup", validatePassword);
document.getElementById("confirmPassword").addEventListener("keyup", validatePasswordMatch);

// Add event listener to form submission
document.getElementById("signupForm").addEventListener("submit", handleSubmit);
