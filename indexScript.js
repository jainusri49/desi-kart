document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("actionBtn");
  const logoutBtn = document.getElementById("logOut");
  const toggleLink = document.getElementById("toggleLink");
  const confirmPasswordField = document.getElementById("confirmPassword"); // Add this line

  // Check if user is logged in
  // if (localStorage.getItem("loggedIn") === "true") {
  //     window.location.href = "home.html";
  //     // document.title = "Desi-cart"; 
  // }

  // Login button functionality
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (isLogin) {
        // Login Logic
        const storedUsername = localStorage.getItem("Username");
        const storedPassword = localStorage.getItem("Password");

        if (username === storedUsername && password === storedPassword) {
          localStorage.setItem("loggedIn", "true");
          document.title = "Desi-cart - Home";
          window.location.href = "home.html";
        } else {
          alert("Invalid username or password.");
        }
      } else {
        // Signup Logic
        const email = document.getElementById("email").value;
        const number = document.getElementById("number").value;
        const confirmPassword = confirmPasswordField.value; // Retrieve the confirm password

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
      }
    });
  }

  // Logout button functionality
  // Ensure the logout button logic is handled properly
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedIn");
      window.location.href = "index.html";
    });
  }
});
