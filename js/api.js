const API = "http://localhost:5000/api";

function getToken() {
    return localStorage.getItem("token");
}

async function apiGet(url) {
    return fetch(API + url, {
        headers: {"Authorization": "Bearer " + getToken()}
    }).then(res => res.json());
}

async function apiPost(url, body) {
    return fetch(API + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + getToken()
        },
        body: JSON.stringify(body)
    }).then(res => res.json());
}
