import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
    },
    city: {
      type: String,
      default: '',
    },
    courseName: {
      type: String,
      required: [true, 'Please specify the course'],
    },
    message: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      enum: ['contact-page', 'course-page', 'home-page', 'popup', 'whatsapp', 'other'],
      default: 'contact-page',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'follow-up', 'enrolled', 'not-interested', 'invalid'],
      default: 'new',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    followUpDate: {
      type: Date,
    },
    notes: {
      type: String,
      default: '',
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    contactHistory: [
      {
        date: { type: Date, default: Date.now },
        mode: { type: String, enum: ['call', 'email', 'whatsapp', 'visit'], default: 'call' },
        notes: String,
        contactedBy: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Inquiry', inquirySchema);
