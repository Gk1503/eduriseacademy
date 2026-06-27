# EduRise Academy - MERN Stack IT Training Institute Website

A complete production-ready website for EduRise Academy, Surat's #1 IT Training Institute.

## 🚀 Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- React Router DOM v6
- Framer Motion (animations)
- Zustand (state management)
- React Query (server state)
- React Hook Form + Zod (forms)
- Swiper.js (carousels)
- Axios (HTTP client)

### Backend
- Node.js 20 LTS
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (image storage)
- Nodemailer (email)
- Security: helmet, cors, rate-limiting

## 📁 Project Structure

```
eduriseacademy/
├── client/          # React frontend
└── server/          # Node.js backend
```

## 🛠️ Setup Instructions

### 1. Backend Setup

```bash
cd server
npm install
```

Create `.env` file in server directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password
ADMIN_NOTIFICATION_EMAIL=admin@eduriseacademy.co.in
```

Seed admin account:
```bash
npm run seed
```

Default credentials:
- Email: admin@eduriseacademy.co.in
- Password: Admin@123

Start server:
```bash
npm run dev
```

### 2. Frontend Setup

```bash
cd client
npm install
```

Create `.env` file in client directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=919876543210
VITE_GOOGLE_MAPS_EMBED_URL=your_google_maps_embed_url
```

Start development server:
```bash
npm run dev
```

## 🌐 Access

- **Website**: http://localhost:5173
- **API**: http://localhost:5000
- **Admin Panel**: http://localhost:5173/admin/login

## 📋 Features

### Public Website
- ✅ Responsive homepage with hero section
- ✅ Course listing and detail pages
- ✅ About page
- ✅ Placement showcase
- ✅ Gallery with lightbox
- ✅ Internship program page
- ✅ Contact form with email notifications
- ✅ WhatsApp integration
- ✅ Mobile bottom navigation
- ✅ Announcement bar
- ✅ SEO optimized

### Admin Panel
- ✅ JWT authentication
- ✅ Dashboard with statistics
- ✅ Course management (CRUD)
- ✅ Inquiry management
- ✅ Student/placement management
- ✅ Gallery management
- ✅ Announcement management

### Email System
- ✅ Admin notification on new inquiry
- ✅ Student confirmation email
- ✅ Professional HTML templates

## 🎨 Design System

### Colors
- Primary: #FF6B00 (Orange)
- Secondary: #FFC107 (Yellow)
- Dark: #0A0F1E
- Accent: #10B981 (Green)

### Fonts
- Headings: Poppins
- Body: Inter

## 📦 Deployment

### Backend (Render.com)
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect repository
4. Set environment variables
5. Deploy

### Frontend (Vercel)
1. Push code to GitHub
2. Import project on Vercel
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create free cluster
2. Whitelist IP: 0.0.0.0/0
3. Get connection string

## 🔒 Security Features

- JWT authentication
- Password hashing (bcrypt)
- Rate limiting
- CORS protection
- XSS protection
- MongoDB sanitization
- Helmet security headers

## 📧 Email Configuration

Use Gmail App Password:
1. Enable 2FA on Gmail
2. Generate App Password
3. Use in GMAIL_APP_PASSWORD

## 🎯 API Endpoints

### Public
- GET /api/courses
- GET /api/courses/:slug
- POST /api/inquiries
- GET /api/students
- GET /api/gallery
- GET /api/announcements

### Admin (Protected)
- POST /api/auth/login
- GET /api/auth/me
- All CRUD operations for courses, inquiries, students, gallery, announcements

## 📱 Mobile Responsive

- Mobile-first design
- Touch-friendly UI
- Bottom navigation bar
- Optimized images
- Fast loading

## 🚀 Performance

- Code splitting
- Lazy loading
- Image optimization (Cloudinary)
- Caching strategies
- Minified production build

## 📄 License

MIT License - EduRise Academy 2024

## 👨‍💻 Support

For support, email: info@eduriseacademy.co.in
