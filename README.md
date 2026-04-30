# 🚀 FayasAI Cloud – Full Stack AI SaaS Authentication Platform

![React](https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge\&logo=react)
![Vite](https://img.shields.io/badge/Build-Vite-purple?style=for-the-badge\&logo=vite)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green?style=for-the-badge\&logo=fastapi)
![SQLite](https://img.shields.io/badge/Database-SQLite-blue?style=for-the-badge\&logo=sqlite)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

A **modern full-stack AI SaaS login platform** built with **React + FastAPI**, featuring **JWT authentication**, **real-time validation**, **glassmorphism UI**, and **responsive SaaS-style design**.

This project demonstrates a complete **frontend-to-backend authentication flow**, making it an ideal **portfolio project** for showcasing **full-stack development skills**.

---

# 📌 Project Overview

**FayasAI Cloud** is a modern authentication system inspired by real-world AI SaaS applications.

It includes:

* A modern **AI SaaS landing page**
* Animated **login modal**
* **User registration & login**
* **JWT authentication**
* **Password hashing**
* **SQLite database**
* **Protected API endpoints**
* **Responsive UI**
* **Portfolio-ready architecture**

This project was built to demonstrate:

* Frontend Development
* REST API Integration
* Authentication Systems
* Backend API Design
* Secure Login Workflow
* Full-Stack Project Structure

---

# 🖼️ Application Preview

## Landing Page

Add your screenshot here:

```md
![Landing Page](./screenshots/landing-page.png)
```

---

## Login Modal

Add your screenshot here:

```md
![Login Modal](./screenshots/login-modal.png)
```

---

## Swagger API Docs

Add your screenshot here:

```md
![Swagger Docs](./screenshots/swagger-docs.png)
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* CSS3
* LocalStorage API

## Backend

* FastAPI
* SQLAlchemy
* SQLite
* JWT Authentication
* Passlib (Password Hashing)
* Pydantic Validation

---

# ✨ Key Features

## 🎨 Modern SaaS UI

* AI SaaS landing page
* Animated modal sign-in
* Glassmorphism cards
* Responsive design
* Gradient buttons
* Interactive UI feedback

## 🔐 Secure Authentication

* JWT token generation
* Password hashing with bcrypt
* Protected routes
* Token-based session handling

## ⚡ Real-Time Validation

* Email validation
* Password validation
* Error messages under inputs
* Login state persistence

## 📄 API Documentation

* Swagger UI via FastAPI
* Interactive endpoint testing

---

# 📂 Project Structure

```bash
Fayas_AI/
│
├── backend/
│   ├── main.py
│   ├── app.db
│   └── venv/
│
└── frontend/
    └── signin-ui/
        ├── public/
        ├── src/
        │   ├── App.jsx
        │   └── App.css
        └── package.json
```

---

# ⚙️ Installation & Setup

---

# 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/fayasai-cloud.git
cd fayasai-cloud
```

---

# 2️⃣ Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install fastapi uvicorn sqlalchemy passlib python-jose pydantic email-validator bcrypt
```

Run backend server:

```bash
uvicorn main:app --reload --port 8000
```

Backend will run at:

```bash
http://127.0.0.1:8000
```

Swagger docs:

```bash
http://127.0.0.1:8000/docs
```

---

# 3️⃣ Frontend Setup

Navigate to frontend:

```bash
cd ../frontend/signin-ui
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# 🔌 API Endpoints

## Register User

**POST**

```bash
/auth/register
```

Request:

```json
{
  "email": "test@example.com",
  "password": "Password@123"
}
```

---

## Login User

**POST**

```bash
/auth/login
```

Request:

```json
{
  "email": "test@example.com",
  "password": "Password@123"
}
```

Response:

```json
{
  "access_token": "jwt_token_here",
  "token_type": "bearer"
}
```

---

## Get Current User

**GET**

```bash
/auth/me
```

Header:

```bash
Authorization: Bearer <token>
```

---

# 🔐 Authentication Workflow

1. User registers via `/auth/register`
2. Credentials stored in SQLite DB
3. Password hashed using bcrypt
4. User logs in via `/auth/login`
5. JWT token generated
6. Token stored in browser localStorage
7. Protected endpoints use Bearer Token authentication

---

# 💡 Skills Demonstrated

This project demonstrates expertise in:

### Frontend

* React Component Architecture
* State Management with Hooks
* Form Validation
* API Integration
* Responsive UI Design

### Backend

* FastAPI REST APIs
* SQLAlchemy ORM
* JWT Authentication
* Secure Password Storage
* API Documentation

### Full Stack

* Frontend + Backend Integration
* Authentication Flow
* Secure Session Handling
* Production-ready structure

---

# 🚀 Future Enhancements

* Dashboard after login
* Refresh tokens
* Role-based authentication
* Forgot password
* Email verification
* Google OAuth
* Deployment on AWS / Render / Vercel
* CI/CD pipeline

---

# 📈 Portfolio Impact

This project is designed as a **portfolio-ready authentication system** demonstrating:

* Modern frontend development
* Backend API design
* Authentication implementation
* Security best practices
* Full-stack integration

This is a strong showcase project for roles like:

* Full Stack Developer
* Frontend Developer
* Backend Developer
* Python Developer
* Software Engineer

---

# 👨‍💻 Author

**Fayas Faz**

Full Stack Developer | React | FastAPI | AI Integration | Automation

---

# ⭐ Support

If you like this project:

* Star this repository
* Fork this project
* Connect on LinkedIn

---
