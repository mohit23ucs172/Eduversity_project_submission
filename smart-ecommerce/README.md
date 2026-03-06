# Smart E-Commerce Platform

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)
![Status](https://img.shields.io/badge/Status-Completed-success.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A premium, full-stack e-commerce web application built using the MERN stack. Designed with a modern, high-performance user interface featuring custom CSS particle animations and a glassmorphism design language.

## 🚀 Features

* **Full-Stack Architecture**: Clean separation of concerns between the React frontend and Node.js/Express backend.
* **Premium User Interface**: Fully responsive design with animated neon-mesh backgrounds, glassmorphism UI cards, and custom CSS loaders.
* **State Management**: Utilizes React Context API for efficient, global management of the user's shopping cart and authentication status.
* **Secure Authentication**: Custom JSON Web Token (JWT) implementation for secure user login, registration, and session persistence.
* **Database Integration**: MongoDB database structured with distinct schemas for Users, Products, and Orders, including a secure password hashing mechanism (Bcrypt).
* **Automated Data Seeding**: Custom backend script to easily tear down and populate the database with sample electronics data for rapid testing.

## 💻 Tech Stack

**Frontend:**
* React.js (Vite)
* React Router DOM
* Axios (HTTP Client)
* Custom CSS3 (Keyframe Animations, Glassmorphism)

**Backend:**
* Node.js
* Express.js
* MongoDB & Mongoose
* JSON Web Tokens (JWT) & Bcrypt.js

## ⚙️ Local Development Setup

Follow these instructions to run the project on your local machine.

### Prerequisites
* Node.js installed on your local machine.
* A MongoDB database (Local instance or MongoDB Atlas cluster).

### Step 1: Clone & Install
```bash
# Clone the repository
git clone <your-github-repo-url>
cd smart-ecommerce

# Install Backend Dependencies
cd backend
npm install

# Install Frontend Dependencies
cd ../frontend
npm install