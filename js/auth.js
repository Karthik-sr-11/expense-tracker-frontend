const API_URL = "https://expense-tracker-backend-aq81.onrender.com/";
function saveToken(token) {
    localStorage.setItem("token", token);
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
    });

    const data = await res.json();

    if (data.token) {
        saveToken(data.token);
        alert("Login Successful");
        window.location.href = "index.html";
    } else {
        alert(data.message);
    }
}

async function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email, password})
    });

    const data = await res.json();

    if (data.message) {
        alert("Registration Successful");
        window.location.href = "login.html";
    }
}




