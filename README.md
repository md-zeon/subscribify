# 🎁 Subscribify

**Subscribify** is a multi-themed, personalized Subscription Box Service Platform built with **React**, **Firebase**, **React Router**, and **DaisyUI**. Users can browse curated subscription boxes, manage their profiles, and enjoy a seamless and responsive experience.

---

## 🌟 Purpose

The project aims to offer users a curated, monthly subscription experience with local support encouragement. It provides a smooth, secure, and user-friendly interface for exploring and managing personalized tech-based subscription boxes.

---

## 🔗 Live Demo

👉 [Subscribify Live Site](https://subscription-box-22a46.web.app/)

---

## 🚀 Key Features

- ✅ **Responsive Design** – Optimized for mobile, tablet, and desktop
- 🔐 **Protected Routes** – Pages like Subscription Details and My Profile require login
- 🔄 **Persistent Auth State** – Keeps users logged in even after reload
- 💬 **Review System** – Users can submit reviews and ratings (1–5)
- 🧭 **Dynamic Page Titles** – Implemented via `react-helmet-async`
- 🎠 **Swiper Slider** – Interactive hero carousel with 3 slides
- 🎨 **AOS Animations** – Smooth entrance animations for key sections
- 🧑‍💻 **My Profile Page** – View and update name and photo using Firebase `updateProfile()`
- ❌ **Custom 404 Page** – Friendly page for non-existent routes
- 🔧 **Password Reset** – Working forgot password flow with Gmail redirect

## npm Packages Used
- react
- react-dom
- react-router
- firebase
- swiper
- react-toastify
- aos
- react-helmet-async
- daisyui
- tailwindcss
- react-icons

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/md-zeon/subscribify.git
cd subscribify
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Firebase
Create a .env.local file and add your Firebase configuration:
```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

4. Run the Development Server
```bash
npm run dev
```
Visit: http://localhost:5173
