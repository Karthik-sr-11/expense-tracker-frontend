const API_BASE_URL = "https://expense-tracker-backend-aq81.onrender.com";

function getToken() {
    return localStorage.getItem("token");
}

async function apiGet(url) {
    const res = await fetch(API_BASE_URL + url, {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    });
    return res.json();
}

async function apiPost(url, body) {
    const res = await fetch(API_BASE_URL + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + getToken()
        },
        body: JSON.stringify(body)
    });
    return res.json();
}
