-- Create the database (Note: This command should be run as a superuser in PostgreSQL)
CREATE DATABASE imagegenerator;

-- Create the users table for authentication
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(6) CHECK (gender IN ('male', 'female')) NOT NULL,
    profilePic VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


-- Create the images table
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


