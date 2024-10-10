# Image Generation Web Application

## 📚 Project Description

This web application allows users to generate images based on text prompts. It includes features such as user authentication, image generation, and profile management. The application is built with a modern tech stack using a **React frontend**, an **Express backend**, and **PostgreSQL** as DataBase.

![Screenshot-AlgorithmVisualizer 1](https://github.com/user-attachments/assets/93d40a5f-d2b1-4946-831b-974f5965b32d)
![Screenshot-AlgorithmVisualizer 2](https://github.com/user-attachments/assets/06d7e1cb-99f2-4c4e-a4d0-74a996b59d1a)

## 🚀 Features

1. **Image Generation**
   - Users can input text prompts to generate images using an external API: [ai-image-generator3.p.rapidapi.com](https://rapidapi.com).
   - Generated images are displayed in a carousel format for easy browsing.

2. **User Authentication**
   - Users can sign up, log in, and log out.
   - Authentication state is managed using **Zustand** with persistent storage in `localStorage`.

3. **Profile Management**
   - Users can view their profile and favorite images.
   - The profile page displays a carousel of the user's favorite images.

4. **Routing**
   - The application uses **react-router-dom** for client-side routing, allowing navigation between:
     - Home
     - Login
     - Signup
     - Profile pages.

5. **Notifications**
   - **react-hot-toast** is used for displaying notifications, such as errors or success messages.

6. **Protected Routes**
   - Certain routes are protected and require authentication to access, such as the Profile page.

## 🛠️ Tech Stack

### Frontend

- **React**: The main library for building the user interface.
- **React Router**: For handling routing within the application.
- **Zustand**: A state management library used for managing authentication state.
- **Axios**: For making HTTP requests to the backend and external APIs.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **React Hot Toast**: For displaying toast notifications.
- **Lucide React**: For adding icons to the application.

### Backend

- **Express**: A web framework for building the backend API.
- **PostgreSQL**: Used as the main database, connected via the `pg` package.
- **JWT (JSON Web Tokens)**: For handling authentication.
- **Bcryptjs**: For hashing passwords to enhance security.
- **Socket.io**: For real-time communication, potentially for chat or notifications.


### Development Tools

- **Vite**: A fast build tool for the frontend, providing optimized development and build processes.
- **Nodemon**: Automatically restarts the server during development upon detecting changes.
- **ESLint**: For linting JavaScript code to maintain code quality and consistency.

## 📦 Additional Details

- **API Integration**: The frontend integrates with an external image generation API to create images based on user input.
- **State Management**: **Zustand** is used for managing global state, particularly for authentication, with persistence in `localStorage`.
- **Security**: The backend uses **JWT** for secure authentication, while **bcrypt** is used to hash passwords for secure storage.

## 🎯 Target Audience

This project is intended for users who want to explore the creative possibilities of generating images from text, as well as developers interested in integrating APIs and building full-stack web applications with user management and real-time features.

## 📦 Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/image-generation-app.git
```

2. Navigate to the project directory:

```bash
cd image-generation-app
```
3. Install the dependencies for both the frontend and backend:

```bash
# For the frontend
cd frontend

npm install

# For the backend
cd ../backend
npm install
```

4. Start the development servers:
```bash
# Frontend
npm run dev

# Backend
npm run start
```
