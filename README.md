# Backend Practice Proj2-CRUD Music App

A backend-focused CRUD music app built with Node.js and Express.

## What This Project Does

This project exposes backend APIs for:
- User authentication (register, login, logout)
- Artist-only music upload
- Artist-only album creation
- User-only music and album fetching

It uses JWT (stored in cookies) with role-based middleware (`artist` and `user`) to protect routes.

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- bcrypt
- cookie-parser
- multer
- ImageKit
- dotenv

## API Endpoints

Base URL: `http://localhost:3000`

### Auth (`/api/auth`)

- `POST /api/auth/register` - Register a new user or artist
- `POST /api/auth/login` - Login with username/email and password
- `POST /api/auth/logout` - Logout current user

### Music (`/api/music`)

- `POST /api/music/upload` - Upload music file (`artist` only)
- `POST /api/music/album` - Create album (`artist` only)
- `GET /api/music/` - Get all music (`user` only)
- `GET /api/music/getalbums` - Get all albums (`user` only)
- `GET /api/music/getalbum/:albumId` - Get album by ID (`user` only)

## Run Locally

1. Install dependencies:
   `cd backend && npm install`
2. Create `backend/.env` and add:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `IMAGEKIT_PRIVATE_KEY`
3. Start server:
   `npm run dev`

Server runs on `http://localhost:3000`.
