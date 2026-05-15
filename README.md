Directus + React POC

A Proof of Concept (POC) project demonstrating how to integrate Directus as a Headless CMS / Backend Platform with a React + Vite + TypeScript frontend application.

This project showcases:
	•	Directus setup using Docker
	•	Auto-generated REST APIs
	•	React frontend integration
	•	CRUD operations
	•	Permissions handling
	•	API consumption using fetch
	•	Local development environment
	•	Dockerized backend architecture

⸻
 Tech Stack

Frontend
	•	React
	•	TypeScript
	•	Vite

Backend
	•	Directus

Database
	•	SQLite

DevOps / Environment
	•	Docker
	•	Docker Compose

⸻

 Project Structure

project-root/
│
├── docker-compose.yml
├── README.md
├── .gitignore
│
├── data/
│
├── uploads/
│
└── directus-frontend/
    │
    ├── src/
    ├── public/
    ├── package.json
    └── vite.config.ts


⸻

 Project Overview

This project demonstrates how Directus can be used as:
	•	A Headless CMS
	•	Backend API Generator
	•	Authentication System
	•	Permission Management System
	•	Database Abstraction Layer

without writing a traditional backend server.

The frontend communicates directly with Directus REST APIs.



 Directus Setup

Prerequisites

Make sure you have installed:
	•	Docker Desktop
	•	Node.js
	•	npm

⸻

 Running Directus

1. Clone the repository

git clone <repo-url>
cd <project-folder>




2. Start Directus

docker compose up

Directus will run on:

http://localhost:8055




 Directus Admin Credentials

Email: admin@example.com
Password: innovera123


⸻

 Database Configuration

This project uses SQLite for simplicity during development and POC implementation.

Database file is automatically created by Directus.

⸻

 Docker Configuration

The project uses Docker Compose to run Directus locally.

Example:

services:
  directus:
    image: directus/directus:latest

    ports:
      - "8055:8055"


      ADMIN_EMAIL: "admin@example.com"
      ADMIN_PASSWORD: "innovera123"

      DB_CLIENT: "sqlite3"
      DB_FILENAME: "/directus/database.db"

      CORS_ENABLED: "true"
      CORS_ORIGIN: "*"

    volumes:
      - ./data:/directus


⸻

 Collections

Articles Collection

Fields:

Field Name	Type
title	String
price	Integer
description	Text
image	File/Image


⸻

 Permissions

Public role was configured to allow:
	•	Read Articles

This allows the React frontend to consume and create data without authentication during development.

⸻

 API Endpoints

Get Articles

GET /items/articles

Example:

http://localhost:8055/items/articles


⸻

Create Product

POST /items/articles

Request body:

{
  "title": "Our Vision at Innovera",
  "slug": our-vision-at-innovera,
  "content": "At Innovera, we believe in teamwork, innovation, and continuous learning. Our goal is to create smart solutions that make a real impact in the tech world."
  "featured_image":"21430619-ffef-4800-aaef-0a99272038c3"
}


⸻

 Frontend Setup

Navigate to frontend

cd directus-frontend




Install dependencies

npm install




Run frontend

npm run dev

Frontend will run on:

http://localhost:5173




 Frontend Features

Implemented
	•	Fetch articles from Directus
	•	Render articles dynamically
	•	Automatic list refresh after creation

⸻

 Frontend API Integration

Example fetch request:

fetch("http://localhost:8055/items/articles")
  .then((res) => res.json())
  .then((data) => {
    setArticles(data.data);
  });


⸻

 Create Product Example

await fetch("http://localhost:8055/items/articles", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title,
    price,
    description,
  }),
});


⸻

 CORS Configuration

CORS was enabled in Directus to allow communication between:
	•	Frontend: localhost:5173
	•	Backend: localhost:8055

⸻

 Common Issues

Docker Engine Not Running

If you see:

failed to connect to the docker API

Make sure Docker Desktop is running.

⸻

CORS Errors

Ensure:

CORS_ENABLED: "true"
CORS_ORIGIN: "*"

are configured in Docker Compose.

⸻

403 Forbidden

Make sure the Public role has permission to:
	•	Read articles

inside Directus Access Control.

⸻

 Learning Goals

This POC demonstrates:
	•	Headless CMS architecture
	•	Frontend/backend separation
	•	Auto-generated APIs
	•	Dockerized development environments
	•	React integration with CMS platforms
	•	CRUD workflows
	•	Permission systems


