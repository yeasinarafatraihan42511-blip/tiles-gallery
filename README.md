# 🧱 Tiles Gallery

## 📌 Project Overview
Tiles Gallery is a modern web application built with Next.js that showcases a collection of aesthetic tiles. Users can explore, search, and view detailed information about tiles in a visually engaging interface.

---

## 🌐 Live Website
🔗https://tiles-gallery-five.vercel.app/

---

## 🎯 Purpose
The goal of this project is to create a responsive tile gallery platform with authentication, dynamic routing, and clean UI design following modern web development practices.

---

## ✨ Key Features

- 🔍 Search tiles by title
- 🧱 View all tiles in a gallery layout
- 📄 Single tile details page with full information
- 🔐 Authentication system (Email + Google login)
- 👤 User profile with update functionality
- 🚫 Protected routes (Private pages)
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- ⚡ Fast performance using Next.js App Router
- 🔄 Loading spinner during data fetching
- ❌ Custom 404 Not Found page
- 🎞️ Animated banner & marquee section

---

## 🛠️ Technologies Used

- **Framework:** Next.js (App Router)
- **UI Library:** HeroUI + Tailwind CSS
- **Authentication:** BetterAuth (MongoDB Adapter)
- **Database:** MongoDB
- **Deployment:** Vercel

---

## 📁 Project Structure

---

## 🔐 Authentication Features

- Email & Password login/register
- Google social login
- Secure session handling
- Redirect after login/logout

---

## 🚦 Route Permissions

| Route | Access |
|------|--------|
| / | Public |
| /all-tiles | Public |
| /login | Public |
| /register | Public |
| /tile/[id] | Private |
| /my-profile | Private |

---

## 🎨 UI Highlights

- Clean and modern navbar with responsive menu
- Animated banner with background image slider
- Marquee section for announcements
- Card-based tile display
- Smooth hover effects and transitions

---

## 📦 NPM Packages Used

- @heroui/react
- better-auth
- mongoose
- next
- tailwindcss

---

## ⚙️ Environment Variables

Create a `.env.local` file:
📢 Final Notes

This project follows all assignment requirements including:

Proper routing
Authentication
Responsive design
Clean UI
Deployment readiness