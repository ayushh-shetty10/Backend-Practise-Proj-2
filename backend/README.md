# Backend Practice Proj2-CRUD Music App

A  backend-focused CRUD music app built with Node.js and Express.

## What This Project Does

This project provides APIs for:
- User auth (register, login, logout)
- Artist-only music upload
- Artist-only album creation
- User-only music and album fetching

It uses JWT (stored in cookies) and role-based middleware (`artist` and `user`) to protect routes.

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- bcrypt (password hashing)
- cookie-parser
- multer (file upload)
- ImageKit (music file storage)
- dotenv

## API Endpoints

Base URL: `http://localhost:3000`

### Auth APIs (`/api/auth`)

- `POST /api/auth/register` - Register a new user/artist
- `POST /api/auth/login` - Login with username/email + password
- `POST /api/auth/logout` - Logout user

### Music APIs (`/api/music`)

- `POST /api/music/upload` - Upload music file (`artist` only)
- `POST /api/music/album` - Create album (`artist` only)
- `GET /api/music/` - Get all music (`user` only)
- `GET /api/music/getalbums` - Get all albums (`user` only)
- `GET /api/music/getalbum/:albumId` - Get album by ID (`user` only)



