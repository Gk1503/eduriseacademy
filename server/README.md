# EduRise Academy Backend Server

Complete backend API server for EduRise Academy management system with MongoDB Atlas integration.

## Features

- 🔐 JWT Authentication
- 👥 User Management (Admin, Staff, Teacher roles)
- 📚 Course Management (CRUD operations)
- 🎓 Student Management with Fee Tracking
- 📧 Inquiry Management with Contact History
- 📢 Announcements System
- 🖼️ Gallery Management
- 📝 Website Content Management
- 🔒 Secure Password Hashing
- 🛡️ Input Validation & Error Handling

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **Validation:** express-validator
- **Security:** helmet, cors

## Installation

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Update MongoDB credentials:
     ```
     MONGODB_URI=mongodb+srv://gopal:Krishnan1503@cluster0.wnvpzgg.mongodb.net/eduriseacademy?retryWrites=true&w=majority&appName=Cluster0
     ```

3. **Seed the database (optional):**
   ```bash
   npm run seed
   ```

4. **Start the server:**
   ```bash
   # Development mode with auto-restart
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login user
- `POST /api/auth/register` - Register new user (Admin only)
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `GET /api/courses/slug/:slug` - Get course by slug
- `POST /api/courses` - Create course (Admin)
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)

### Students
- `GET /api/students` - Get all students (Admin)
- `GET /api/students/:id` - Get student by ID (Admin)
- `POST /api/students` - Create student (Admin)
- `PUT /api/students/:id` - Update student (Admin)
- `DELETE /api/students/:id` - Delete student (Admin)
- `POST /api/students/:id/payments` - Add payment (Admin)

### Inquiries
- `GET /api/inquiries` - Get all inquiries (Admin)
- `GET /api/inquiries/:id` - Get inquiry by ID (Admin)
- `POST /api/inquiries` - Create inquiry (Public)
- `PUT /api/inquiries/:id` - Update inquiry (Admin)
- `DELETE /api/inquiries/:id` - Delete inquiry (Admin)
- `POST /api/inquiries/:id/contact` - Add contact history (Admin)

### Announcements
- `GET /api/announcements` - Get all announcements
- `GET /api/announcements/:id` - Get announcement by ID
- `POST /api/announcements` - Create announcement (Admin)
- `PUT /api/announcements/:id` - Update announcement (Admin)
- `DELETE /api/announcements/:id` - Delete announcement (Admin)

### Gallery
- `GET /api/gallery` - Get all gallery items
- `GET /api/gallery/:id` - Get gallery item by ID
- `POST /api/gallery` - Create gallery item (Admin)
- `PUT /api/gallery/:id` - Update gallery item (Admin)
- `DELETE /api/gallery/:id` - Delete gallery item (Admin)

### Website Content
- `GET /api/website-content` - Get all content
- `GET /api/website-content/key/:key` - Get content by key
- `POST /api/website-content` - Create content (Admin)
- `PUT /api/website-content/:id` - Update content (Admin)
- `DELETE /api/website-content/:id` - Delete content (Admin)

## Default Credentials

After running the seed script:
- **Email:** admin@edurise.com
- **Password:** admin123

⚠️ **Change these credentials in production!**

## Environment Variables

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
ADMIN_EMAIL=admin@edurise.com
ADMIN_PASSWORD=admin123
CLIENT_URL=http://localhost:5173
```

## Project Structure

```
server/
├── config/
│   └── db.js              # Database connection
├── controllers/           # Request handlers
│   ├── authController.js
│   ├── courseController.js
│   ├── studentController.js
│   ├── inquiryController.js
│   ├── announcementController.js
│   ├── galleryController.js
│   └── websiteContentController.js
├── middleware/
│   ├── auth.js           # JWT authentication
│   └── errorHandler.js   # Error handling
├── models/               # Mongoose schemas
│   ├── User.js
│   ├── Course.js
│   ├── Student.js
│   ├── Inquiry.js
│   ├── Announcement.js
│   ├── Gallery.js
│   └── WebsiteContent.js
├── routes/               # API routes
│   ├── authRoutes.js
│   ├── courseRoutes.js
│   ├── studentRoutes.js
│   ├── inquiryRoutes.js
│   ├── announcementRoutes.js
│   ├── galleryRoutes.js
│   └── websiteContentRoutes.js
├── scripts/
│   └── seed.js           # Database seeding
├── .env.example          # Environment template
├── .gitignore
├── package.json
├── README.md
└── server.js             # Main entry point
```

## License

ISC
