# 🎓 EduRise Academy - Complete Full Stack Application

A comprehensive education management system with React frontend and Node.js backend, connected to MongoDB Atlas.

## 🌟 Features

### Frontend (React + Vite)
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔐 Protected admin routes
- 💼 Complete admin dashboard
- 🎯 Student & course management
- 📊 Analytics and reporting

### Backend (Node.js + Express)
- 🔒 JWT authentication
- 📊 MongoDB Atlas integration
- 🛡️ Secure password hashing
- 📝 Complete CRUD APIs
- ⚡ Express middleware
- 🔐 Role-based access control

## 🚀 Quick Start

### Windows Users (Easiest Way)

1. **Install Everything:**
   ```bash
   Double-click: INSTALL.bat
   ```
   This will:
   - Install all dependencies
   - Seed the database
   - Set up admin account

2. **Start Application:**
   ```bash
   Double-click: START.bat
   ```
   This will:
   - Start backend server (Port 5000)
   - Start frontend server (Port 5173)
   - Open in separate terminals

### Manual Setup

See [SETUP.md](SETUP.md) for detailed instructions.

## 🔑 Default Login

After running the installation:

- **URL:** http://localhost:5173/admin/login
- **Email:** admin@edurise.com
- **Password:** admin123

## 📂 Project Structure

```
eduriseacademy/
├── client/               # React Frontend
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable components
│   │   ├── services/    # API integration
│   │   └── store/       # State management
│   └── .env            # Frontend config
│
├── server/              # Node.js Backend
│   ├── models/         # MongoDB schemas
│   ├── controllers/    # Request handlers
│   ├── routes/         # API routes
│   ├── middleware/     # Auth & validation
│   ├── config/         # Configuration
│   └── .env           # Backend config
│
├── INSTALL.bat         # Windows installer
├── START.bat           # Quick start script
├── SETUP.md           # Detailed setup guide
└── README.md          # This file
```

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios
- Zustand (State Management)
- React Hook Form
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT Authentication
- bcryptjs
- Helmet (Security)
- CORS

## 📡 API Endpoints

### Base URL: `http://localhost:5000/api`

#### Authentication
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user
- `POST /auth/logout` - User logout

#### Courses
- `GET /courses` - List all courses
- `POST /courses` - Create course
- `PUT /courses/:id` - Update course
- `DELETE /courses/:id` - Delete course

#### Students
- `GET /students` - List students
- `POST /students` - Add student
- `PUT /students/:id` - Update student
- `POST /students/:id/payments` - Add payment

#### Inquiries
- `GET /inquiries` - List inquiries
- `POST /inquiries` - Create inquiry
- `PUT /inquiries/:id` - Update inquiry

#### Announcements
- `GET /announcements` - List announcements
- `POST /announcements` - Create announcement
- `PUT /announcements/:id` - Update

#### Gallery
- `GET /gallery` - Get images
- `POST /gallery` - Upload image
- `DELETE /gallery/:id` - Delete image

## 🗄️ Database

**MongoDB Atlas Connection:**
- Username: gopal
- Password: Krishnan1503
- Cluster: cluster0.wnvpzgg.mongodb.net
- Database: eduriseacademy

**Collections:**
- users
- courses
- students
- inquiries
- announcements
- gallery
- websitecontents

## 📱 Social Media

- Instagram: [@edurise_academy_gnr](https://www.instagram.com/edurise_academy_gnr)
- Facebook: [EduRise Academy](https://www.facebook.com/share/p/18v1f9ZBh7/)
- YouTube: [@eduriseacademy-v3m](https://youtube.com/@eduriseacademy-v3m)

## 🔧 Development

### Backend Development
```bash
cd server
npm run dev
```

### Frontend Development
```bash
cd client
npm run dev
```

### Seed Database
```bash
cd server
npm run seed
```

## 📦 Installation Commands

### Install Backend
```bash
cd server
npm install
```

### Install Frontend
```bash
cd client
npm install
```

## 🎯 Admin Panel Features

✅ Dashboard with analytics
✅ Student management
✅ Course management
✅ Inquiry tracking
✅ Fee management
✅ Payment tracking
✅ Announcements
✅ Gallery management
✅ Website content editor

## 🔐 Security

- JWT token authentication
- Bcrypt password hashing
- Helmet security headers
- CORS configuration
- Input validation
- Protected routes
- Role-based access

## 🌐 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 📖 Documentation

- [Setup Guide](SETUP.md) - Detailed setup instructions
- [Server README](server/README.md) - Backend documentation

## 🐛 Troubleshooting

**Backend won't start:**
- Check MongoDB connection
- Verify .env file exists
- Check port 5000 availability

**Frontend won't connect:**
- Ensure backend is running
- Check VITE_API_URL in .env
- Clear browser cache

**Login fails:**
- Run `npm run seed` in server folder
- Use correct credentials
- Check network tab for errors

## 📞 Support

For issues or questions:
1. Check error messages in terminals
2. Review browser console
3. Verify MongoDB Atlas connectivity
4. Check SETUP.md for solutions

## 🚀 Deployment

### Backend Deployment
- Use Heroku, Railway, or Render
- Set environment variables
- Update MONGODB_URI
- Set NODE_ENV=production

### Frontend Deployment
- Use Vercel, Netlify, or Cloudflare Pages
- Update VITE_API_URL
- Build: `npm run build`
- Deploy: `dist` folder

## 📄 License

ISC

## 👨‍💻 Development Team

EduRise Academy Development Team

---

**Built with ❤️ in Gandhinagar, Gujarat**
