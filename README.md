# 🛡️ Admin Panel — Passport.js Authentication

A secure and responsive Admin Panel built with **Node.js**, **Express**, and **MongoDB**,
featuring **Passport.js** session-based authentication and full admin user management.

---

## 🚀 Features

- 🔐 Session-based Login / Logout with **Passport.js**
- 🔑 Password hashing with **Bcrypt**
- 📋 Full **CRUD** — Add, View, Edit, Delete Admins
- 🖼️ Avatar/Image upload with **Multer**
- 🛡️ Protected routes via Passport Auth Middleware
- 🎨 Responsive UI with **Purple Admin** template
- ⚡ Server-side rendering with **EJS**

---

## 🛠️ Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Runtime      | Node.js                           |
| Framework    | Express.js                        |
| Database     | MongoDB + Mongoose                |
| Auth         | Passport.js + Express-Session     |
| Password     | Bcrypt                            |
| File Upload  | Multer                            |
| View Engine  | EJS                               |
| Styling      | CSS / SCSS                        |

---

## 📁 Project Structure

AdminPanelPassportJs/
│
├── config/           # MongoDB connection + Passport config
├── controllers/      # Business logic (auth + admin CRUD)
├── middleware/       # Passport authentication middleware
├── models/           # Mongoose Admin schema + Multer config
├── public/           # Static files (CSS, JS, images, avatars)
├── routes/           # Express route definitions
├── views/            # EJS templates (login, register, dashboard)
└── app.js            # Application entry point

---

## ⚙️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB running locally

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/devanshimarvania/AdminPanelPassportJs.git

# 2. Navigate into the project
cd AdminPanelPassportJs

# 3. Install dependencies
npm install

# 4. Start the server
node app.js
```

### 🌐 Visit the app

http://localhost:9000

---

## 📸 Pages

| Page         | Route              |
|--------------|--------------------|
| Login        | `/login`           |
| Register     | `/register`        |
| Dashboard    | `/`                |
| Add Admin    | `/addAdmin`        |
| View Admins  | `/viewAdmin`       |
| Edit Admin   | `/editAdmin/:id`   |
| Delete Admin | `/deleteAdmin/:id` |

---

## 🔐 Auth Comparison

| Feature             | Cookie Auth        | Passport.js Auth        |
|---------------------|--------------------|--------------------------|
| Strategy            | Manual cookie check| passport-local strategy  |
| Session handling    | cookie-parser      | express-session          |
| Scalability         | Basic              | Flexible & extensible    |
| Multiple strategies | ❌                 | ✅ (Google, JWT, etc.)   |

---

## 👩‍💻 Author

**Devanshi Marvania**  
[GitHub](https://github.com/devanshimarvania)

---

⭐ Star this repo if you found it helpful!


<img width="1920" height="1080" alt="Screenshot 2026-05-11 151902" src="https://github.com/user-attachments/assets/feadc8ef-0317-4dcf-88f8-359577c3b78e" />
<img width="1920" height="1080" alt="Screenshot 2026-05-11 151919" src="https://github.com/user-attachments/assets/cdf4d42a-d0a1-458e-b8b7-96660070ebaf" />
<img width="1920" height="1080" alt="Screenshot 2026-05-11 153546" src="https://github.com/user-attachments/assets/cc0daca1-63d9-470f-a7e4-0f206a1c15d5" />
<img width="1920" height="1080" alt="Screenshot 2026-05-11 153605" src="https://github.com/user-attachments/assets/9c84b6bf-4960-4166-bdcc-14a2663ea717" />
<img width="1920" height="1080" alt="Screenshot 2026-05-11 153625" src="https://github.com/user-attachments/assets/d47ddfce-e329-41e0-8b0c-86a605cdfca2" />
<img width="1920" height="1080" alt="Screenshot 2026-05-11 153709" src="https://github.com/user-attachments/assets/115eb14f-298c-40fe-b81a-c4bab51f6c68" />
<img width="1920" height="1080" alt="Screenshot 2026-05-11 153742" src="https://github.com/user-attachments/assets/7a3e6b9f-ff0e-40d8-bab2-adf8fdf51678" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5834186e-ae8a-4b2a-9b3e-bab7fa3272a4" />
