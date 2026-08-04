import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Announcement from '../models/Announcement.js';

dotenv.config();

connectDB();

const seedData = async () => {
  try {
    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany();
    await Course.deleteMany();
    await Announcement.deleteMany();

    // Create admin user
    console.log('👤 Creating admin user...');
    const admin = await User.create({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@edurise.com',
      password: process.env.ADMIN_PASSWORD || 'admin123',
      role: 'admin',
      isActive: true,
    });

    console.log(`✅ Admin created: ${admin.email}`);

    // Create sample courses
    console.log('📚 Creating sample courses...');
    const courses = [
      {
        title: 'Full Stack MERN Development',
        description: 'Complete web development course covering MongoDB, Express, React, and Node.js',
        shortDescription: 'Master full-stack development with MERN',
        category: 'web-development',
        duration: '6 months',
        level: 'intermediate',
        price: 25000,
        discountPrice: 20000,
        isActive: true,
        isFeatured: true,
        features: ['Live Projects', 'Industry Mentors', 'Placement Support'],
        whatYouWillLearn: ['React.js', 'Node.js', 'MongoDB', 'RESTful APIs'],
      },
      {
        title: 'Frontend React Development',
        description: 'Master React.js and modern frontend development',
        shortDescription: 'Build modern web apps with React',
        category: 'web-development',
        duration: '4 months',
        level: 'beginner',
        price: 15000,
        discountPrice: 12000,
        isActive: true,
        isFeatured: true,
        features: ['Hands-on Projects', 'Portfolio Building'],
        whatYouWillLearn: ['React.js', 'JavaScript ES6+', 'Tailwind CSS'],
      },
    ];

    const createdCourses = await Course.insertMany(courses);
    console.log(`✅ ${createdCourses.length} courses created`);

    // Create sample announcement
    console.log('📢 Creating sample announcement...');
    await Announcement.create({
      title: 'New Batch Starting Soon!',
      message: 'New batch for Full Stack Development starts from next week. Limited seats available!',
      type: 'info',
      isActive: true,
      targetAudience: 'all',
      priority: 1,
      createdBy: admin._id,
    });

    console.log('✅ Sample announcement created');

    console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║       ✅ Database Seeded Successfully!                   ║
║                                                          ║
║       Admin Login:                                       ║
║       Email: ${admin.email.padEnd(40)} ║
║       Password: ${(process.env.ADMIN_PASSWORD || 'admin123').padEnd(37)} ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    `);

    process.exit(0);
  } catch (error) {
    console.error(`❌ Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedData();
