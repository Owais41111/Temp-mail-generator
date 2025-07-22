# 📧 TEMP-MAIL — Disposable Email Web App

TEMP-MAIL is a sleek, modern, and responsive web application for generating temporary email addresses 🕒. Whether you're signing up for a trial, avoiding spam, or protecting your privacy — TEMP-MAIL provides a fast and secure way to create and manage disposable email addresses, complete with inbox functionality, auto-refreshing, dark mode, and more!

![Screenshot](https://github.com/user-attachments/assets/315406d0-a619-4f9d-8b20-b2353b10f02e)

---

## 🌟 Features

- ✨ **Instant Email Generation** — One-click refresh gives you a brand-new temporary email.
- 📬 **Live Inbox Viewer** — Watch your inbox auto-refresh every 5 seconds.
- 🔄 **Dark/Light Mode** — Toggle seamlessly between light and dark themes.
- 🛡️ **Privacy Focused** — No registration, no data tracking, temporary by default.
- 📱 **Responsive Design** — Works great on desktop and mobile devices.
- ⚙️ **Tab-based UI** — View sender, subject, and email body in separate tabs.
- 📥 **Mail.tm Integration** — Uses the [Mail.tm](https://docs.mail.tm/) API to provide real temporary emails and real-time inbox updates.

---

## 🖼️ Demo

> Check out a live preview here:[Live Demo](https://owais41111.github.io/Temp-mail-generator/)

---

## 🛠️ Tech Stack

| Layer       | Tech                                                                 |
|-------------|----------------------------------------------------------------------|
| Frontend    | HTML5, CSS3, JavaScript                                              |
| UI/UX       | Responsive layout, animated transitions, tab-based navigation        |
| Icons       | [Lucide Icons](https://lucide.dev/)                                 |
| Dark Mode   | CSS class toggling with `localStorage` state                         |
| Email API   | [Mail.tm REST API](https://docs.mail.tm/)                           |

---

## 🚀 Getting Started

### 🧱 Prerequisites

Make sure you have a modern browser and a basic local server if needed (e.g. VS Code Live Server or `python3 -m http.server`).

### 📦 Clone the Repository

```bash
git clone https://github.com/Owais41111/Temp-mail-generator
cd temp-mail
```

### ▶️ Run It Locally

You can simply open `index.html` in your browser. For best results:

```bash
# Example with Python (optional)
python3 -m http.server
```

Then visit: [Live Demo](https://owais41111.github.io/Temp-mail-generator/)

---

## 🔍 How It Works

### 1️⃣ Generate a Temporary Email
Click the **Refresh** button to instantly create a temporary email powered by `mail.tm`.

### 2️⃣ Use It Anywhere
Copy your email and use it to sign up on websites or test services.

### 3️⃣ Read Incoming Emails
Your inbox will refresh automatically. You can view:
- 📩 **Sender**
- 📝 **Subject**
- 🧾 **Email Body (intro)**

---

## 🧠 Educational Sections

The app includes built-in educational cards to help users understand:

- ✅ **What is a Disposable Email?**
- 🎯 **Key Benefits** (auto-generated via JavaScript)
- 🔧 **How to Use** the tool step-by-step
- 💡 **Use Cases** like app testing, social signups, and more

---

## 🎨 Dark Mode

Users can toggle dark mode with a 🌙 / ☀️ button. The theme state is saved in `localStorage` for persistence across sessions.

---

## 🧪 Sample API Endpoints Used

- `POST /accounts` — Create a new temporary mailbox
- `POST /token` — Authenticate and retrieve token
- `GET /messages` — Retrieve inbox messages
- `GET /me` — Get inbox ID

> ⚠️ API rate limits may apply depending on `mail.tm`

---

## 📂 Project Structure

```
/temp-mail
│
├── index.html          # Main HTML file
├── style.css           # Styling (light + dark mode)
├── script.js           # JavaScript logic
├── Ej Logo.png         # Favicon
└── README.md           # Project description
```

---

## 📸 Screenshots

| Light Mode 🌞 | Dark Mode 🌙 |
|---------------|-------------|
| ![light](https://github.com/user-attachments/assets/1b6f34c6-b995-43df-b838-0360fb25fd29) | ![dark](https://github.com/user-attachments/assets/59fc2fb4-788f-49ce-87fa-accfd176d718) |

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! Feel free to fork the project and submit a pull request.

```bash
git checkout -b feature/YourFeature
git commit -m "Add awesome feature"
git push origin feature/YourFeature
```

---

## 📬 Contact

Created with ❤️ by [Ejaz Ahmed](https://github.com/Owais41111)

---
