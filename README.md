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

# Create user:

- Endpoint: **POST /api/users**
- Request body: userdata object in json format
- Example:

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
