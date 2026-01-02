# 📇 Contact Management System

A modern, full-stack contact management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create, view, and delete contacts with a beautiful, responsive user interface.


## ✨ Features

- ✅ **Create Contacts** - Add new contacts with name, email, phone, and optional message
- 👁️ **View Contacts** - Display all contacts in a beautiful card-based grid layout
- 🗑️ **Delete Contacts** - Remove contacts with confirmation dialog
- 🔔 **Real-time Notifications** - Success/error messages for all operations
- ✔️ **Form Validation** - Client-side validation for all input fields
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, professional interface built with Tailwind CSS
- ⚡ **Fast Performance** - Optimized API calls and state management

## 🚀 Live Demo

- **Frontend:** [https://contact-management-wesbite-6za816o71.vercel.app](https://contact-management-wesbite-6za816o71.vercel.app)
- **Backend API:** [https://contact-management-wesbite.onrender.com](https://contact-management-wesbite.onrender.com)

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.18.2** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.0.0** - MongoDB object modeling
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 16.6.1** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shubhamsingh7648/contact-management-system.git
cd contact-management-system
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to your `.env` file:

```env
PORT=5000
DB_URL=mongodb://localhost:27017/contactDB
# Or use MongoDB Atlas:
# DB_URL=mongodb+srv://username:password@cluster.mongodb.net/contactDB
```

```bash
# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`


### Base URL
```
http://localhost:5000/api/contacts
```

### Example API Requests

**Create Contact:**
```bash
curl -X POST http://localhost:5000/api/contacts/createContact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "shubham",
    "email": "shubhams7648@gmail.com",
    "phone": "1234567890",
    "message": "Hello!"
  }'
```

**Get All Contacts:**
```bash
curl http://localhost:5000/api/contacts/getAllContacts
```

**Delete Contact:**
```bash
curl -X DELETE http://localhost:5000/api/contacts/deleteContact/{contactId}
```

## 📊 Database Schema

## 🎨 Features in Detail

### Form Validation
- **Name:** Required, minimum 2 characters
- **Email:** Required, valid email format
- **Phone:** Required, minimum 10 digits
- **Message:** Optional field

### User Experience
- Real-time error messages during form input
- Loading states for all async operations
- Success/error notifications with auto-dismiss
- Confirmation dialog before deletion
- Responsive grid layout (1 column mobile, 2 columns desktop)

## 🚀 Deployment

### Backend Deployment (Render)

1. Create account on [Render](https://render.com)
2. Create new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** Add `DB_URL` and `PORT`

### Frontend Deployment (Vercel)

1. Create account on [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

4. Update `frontend/src/services/api.js` with your production API URL

## 🐛 Common Issues & Solutions

### CORS Errors
If you encounter CORS errors, ensure your backend `server.js` includes your frontend URL in the CORS configuration:

```javascript
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-url.vercel.app"
  ],
  credentials: true
}));
```

### MongoDB Connection Issues
- Check your MongoDB connection string in `.env`
- Ensure IP address is whitelisted in MongoDB Atlas
- Verify database user credentials

### API Not Working on Other Devices
- Make sure you're using the full API URL with `/api/contacts` prefix
- Verify CORS is properly configured
- Check that your deployment is public, not private



⭐ **If you found this project helpful, please give it a star!** ⭐

