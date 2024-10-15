const formTitle = document.getElementById('formTitle');
const emailField = document.getElementById('emailField');
const numberField = document.getElementById('numberField');
const confirmPasswordField = document.getElementById('confirmPasswordField');
const actionBtn = document.getElementById('actionBtn');
const toggleText = document.getElementById('toggleText');
const inputFields = document.querySelectorAll('.input-field');

let isLogin = true;

function addAnimation() {
    inputFields.forEach((field, index) => {
        setTimeout(() => {
            field.classList.add('show');
        }, index * 100);
    });
}

function removeAnimation() {
    inputFields.forEach((field) => {
        field.classList.remove('show');
    });
}

function resetForm() {
    if (isLogin) {
        formTitle.textContent = 'Login';
        emailField.style.display = 'none';
        numberField.style.display = 'none';
        confirmPasswordField.style.display = 'none';
        actionBtn.textContent = 'Login';
        toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggleLink">Sign Up</a>';
    } else {
        formTitle.textContent = 'Sign Up';
        emailField.style.display = 'block';
        numberField.style.display = 'block';
        confirmPasswordField.style.display = 'block';
        actionBtn.textContent = 'Sign Up';
        toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleLink">Login</a>';
    }
}

function toggleForm() {
    removeAnimation();
    setTimeout(() => {
        isLogin = !isLogin;
        resetForm();
        addAnimation();
    }, 500);
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'toggleLink') {
        e.preventDefault();
        toggleForm();
    }
});

// Login and Signup Logic
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("actionBtn");

    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Is Login:", isLogin);

        if (isLogin) {
            // Login Logic
            const storedUsername = localStorage.getItem("Username");
            const storedPassword = localStorage.getItem("Password");

            console.log("Stored Username:", storedUsername);
            console.log("Stored Password:", storedPassword);

            if (username === storedUsername && password === storedPassword) {
                localStorage.setItem("loggedIn", "true");
                document.title = "Desi-cart - Home";
                window.location.href = "home.html";
            } else {
                alert("Invalid username or password.");
            }
        } else {
            // Signup Logic
            const email = document.getElementById("email").value.trim();
            const number = document.getElementById("number").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            console.log("Email:", email);
            console.log("Number:", number);
            console.log("Confirm Password:", confirmPassword);

            if (username && password && email && number) {
                if (password === confirmPassword) {
                    localStorage.setItem("Username", username);
                    localStorage.setItem("Password", password);
                    localStorage.setItem("Email", email);
                    localStorage.setItem("ContactNumber", number);
                    alert("Signup successful! You can now log in.");
                    isLogin = true; // Switch back to login after signup
                    resetForm();
                    addAnimation();
                } else {
                    alert("Passwords do not match.");
                }
            } else {
                alert("Please fill in all fields.");
            }
        }
    });
});

// Initialize the form
window.onload = () => {
    addAnimation();
};


const firstDiv = document.getElementById('firstDiv');
firstDiv.addEventListener('click', function() {
    window.location.href = 'laptop1.html';
});

const secondDiv = document.getElementById('secondDiv');
secondDiv.addEventListener('click', function() {
    window.location.href = 'laptop2.html';
});

const thirdDiv = document.getElementById('thirdDiv');
thirdDiv.addEventListener('click', function() {
    window.location.href = 'laptop3.html';
});
