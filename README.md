# Mongoose Express CRUD - Assignment - B2 - 02

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/misbahurbd/assignment-2.git
```

Run this comment on your terminal to clone this project

### 2. Open project directory:

```bash
cd assignment-2
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Configuration:

Before starting the project, you need to configure the environment by creating an `.env` file in the project root with the following content:

```env
NODE_ENV="development"
PORT=5000
DATABASE_URL=<mongodb_url_here>
BCRYPT_SALT_ROUNDS=12
```

### 5. Start Development Server

```bash
npm run dev
```

Server will start on `http://localhost:5000` as `PORT` on .env file

## API Endpoints

### 1. Create user:

- Endpoint: **POST /api/users**
- Request body: Contain user data object in JSON.
- Example URL: `http://localhost:5000/api/users`
- Example Request Body:

```json
{
  "userId": 1,
  "username": "john_doe",
  "password": "securepassword123",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "age": 25,
  "email": "john.doe@example.com",
  "isActive": true,
  "hobbies": ["reading", "traveling"],
  "address": {
    "street": "123 Main Street",
    "city": "Anytown",
    "country": "Countryland"
  }
}
```

### 2. Get all users:

- Endpoint: **GET /api/users**
- Example URL: `http://localhost:5000/api/users`

### 4. Get single user by userId:

- Endpoint: **GET /api/users/:userId**
- Example URL: `http://localhost:5000/api/users/2`

### 5. Update user data by userId:

- Endpoint: **PUT /api/users/:userId**
- Request body: Contain user data object in JSON
- Example URL: `http://localhost:5000/api/users/2`
- Example Request Body:

```json
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main Street",
    "city": "Anytown",
    "country": "Countryland"
  }
}
```

### 6. Delete user by userId:

- Endpoint: **DELETE /api/users/:userId**
- Example URL: `http://localhost:5000/api/users/2`
