import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import imagesRoutes from './routes/images.routes.js';

// Load environment variables
dotenv.config();

const app = express();

const corsOptions = {
  // origin: ["https://chat-app-fufd.onrender.com"],
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true,
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/images", imagesRoutes); // Add this line

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
