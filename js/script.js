// Dashboard Load
if (window.location.pathname.includes("index.html")) {
    loadDashboard();
}

async function loadDashboard() {
    const data = await apiGet("/api/transactions/summary");

    document.getElementById("balance").innerText = `Total Balance: ₹${data.balance}`;
    document.getElementById("summary").innerText =
        `Income: ₹${data.income} | Expense: ₹${data.expense}`;
}

// Add Transaction
async function addTransaction() {
    const body = {
        title: document.getElementById("title").value,
        amount: Number(document.getElementById("amount").value),
        type: document.getElementById("type").value,
        category: document.getElementById("category").value,
        date: document.getElementById("date").value
    };

    const result = await apiPost("/api/transactions/add", body);
    alert("Transaction Added!");
    window.location.href = "transactions.html";
}

// Load Transactions Page
if (window.location.pathname.includes("transactions.html")) {
    loadTransactions();
}

async function loadTransactions() {
    const list = document.getElementById("transactionList");
    const transactions = await apiGet("/transactions");

    list.innerHTML = "";

    transactions.forEach(t => {
        list.innerHTML += `
        <tr>
            <td>${t.title}</td>
            <td>₹${t.amount}</td>
            <td>${t.type}</td>
            <td>${t.category}</td>
            <td>${t.date}</td>
        </tr>`;
    });
}

