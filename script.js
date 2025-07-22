document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons();

    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            dropdownMenu.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const emailText = document.getElementById("emailText");
    const copyBtn = document.getElementById("copyBtn");
    const refreshBtn = document.getElementById("refreshBtn");
    const changeBtn = document.getElementById("changeBtn");
    const toast = document.getElementById("toast");

    function showToast(message) {
        toast.textContent = message;
        toast.style.display = "block";
        setTimeout(() => {
            toast.style.display = "none";
        }, 2000);
    }

    copyBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(emailText.textContent);
            copyBtn.querySelector("i").setAttribute("data-lucide", "check-circle");
            lucide.createIcons();
            showToast("Email copied!");
            setTimeout(() => {
                copyBtn.querySelector("i").setAttribute("data-lucide", "copy");
                lucide.createIcons();
            }, 2000);
        } catch (err) {
            showToast("Failed to copy email.");
        }
    });

    refreshBtn.addEventListener("click", () => {
        const domains = ["fersco.com", "tmail.io", "tempbox.net", "10mail.org"];
        const randomString = Math.random().toString(36).substring(2, 12);
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        emailText.textContent = `${randomString}@${randomDomain}`;
        showToast("New email generated!");
    });

    changeBtn.addEventListener("click", () => {
        showToast("Settings opened.");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const triggers = document.querySelectorAll(".tab-trigger");
    const contents = document.querySelectorAll(".tab-content");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            // Remove active classes
            triggers.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.style.display = "none");

            // Activate clicked
            trigger.classList.add("active");
            const tabId = trigger.getAttribute("data-tab");
            document.getElementById(tabId).style.display = "block";

            // Re-initialize icons inside newly visible tab
            lucide.createIcons();
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const benefits = [
        "Avoid spam and unwanted emails",
        "Protect your real email address",
        "Enhanced privacy and security",
        "Perfect for testing and trials",
        "No registration required",
        "Instant email generation"
    ];

    const useCases = [
        {
            title: "App Testing",
            description: "Test applications without cluttering your main inbox",
            icon: "zap"
        },
        {
            title: "E-commerce Trials",
            description: "Sign up for free trials without commitment",
            icon: "check-circle"
        },
        {
            title: "Social Signups",
            description: "Create accounts on social platforms anonymously",
            icon: "users"
        },
        {
            title: "Security Testing",
            description: "Test email security without risking your main account",
            icon: "shield"
        }
    ];

    // Render benefits
    const benefitList = document.querySelector(".benefits-list");
    benefits.forEach(text => {
        const item = document.createElement("div");
        item.className = "benefit-item";
        item.innerHTML = `
      <i data-lucide="check-circle" class="icon"></i>
      <span>${text}</span>
    `;
        benefitList.appendChild(item);
    });

    // Render use cases
    const useCaseGrid = document.querySelector(".use-cases");
    useCases.forEach(useCase => {
        const div = document.createElement("div");
        div.innerHTML = `
      <div class="use-case-icon">
        <i data-lucide="${useCase.icon}" class="icon"></i>
      </div>
      <div class="use-case-title">${useCase.title}</div>
      <p>${useCase.description}</p>
    `;
        useCaseGrid.appendChild(div);
    });

    lucide.createIcons(); // Re-render icons after dynamic injection
});



const BASE_URL = 'https://api.mail.tm';
let token = '';
let inboxId = '';
let address = '';
let password = 'password123';

// DOM elements
const emailText = document.getElementById('emailText');
const toast = document.getElementById('toast');

// Buttons
document.getElementById('refreshBtn').addEventListener('click', fetchMessages);
document.getElementById('copyBtn').addEventListener('click', copyEmail);
document.getElementById('changeBtn').addEventListener('click', generateEmail);

// Auto-generate email on load
generateEmail();
setInterval(fetchMessages, 5000); // auto-refresh every 5s

async function generateEmail() {
    emailText.textContent = 'Generating...';

    const domainRes = await fetch(`${BASE_URL}/domains`);
    const domains = await domainRes.json();
    const domain = domains['hydra:member'][0].domain;

    address = `user${Date.now()}@${domain}`;

    await fetch(`${BASE_URL}/accounts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, password })
    });

    const loginRes = await fetch(`${BASE_URL}/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, password })
    });

    const loginData = await loginRes.json();
    token = loginData.token;

    const meRes = await fetch(`${BASE_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const meData = await meRes.json();
    inboxId = meData.id;

    emailText.textContent = address;
    showToast("New email generated!");
    fetchMessages();
}

async function fetchMessages() {
    if (!token) return;

    const res = await fetch(`${BASE_URL}/messages`, {
        headers: { Authorization: `Bearer ${token}` }
    });

    const data = await res.json();
    const messages = data['hydra:member'];

    // UI Tabs
    updateTabContent('inbox', messages.map(m => m.from.address).join('<br>') || 'Waiting for incoming emails...');
    updateTabContent('subject', messages.map(m => m.subject).join('<br>') || 'No subjects yet.');
    updateTabContent('view', messages.map(m => m.intro).join('<hr>') || 'No content yet.');
}

function updateTabContent(id, html) {
    document.querySelector(`#${id} .tab-body`).innerHTML = `<p>${html}</p>`;
}

function copyEmail() {
    navigator.clipboard.writeText(address).then(() => {
        showToast("Email copied to clipboard!");
    });
}

function showToast(message) {
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(() => {
        toast.className = 'toast';
    }, 2000);
}

const toggleBtn = document.getElementById("toggleMode");

// Load preference from localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});