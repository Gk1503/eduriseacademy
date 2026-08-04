import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide student name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide phone number'],
    },
    city: {
      type: String,
      default: '',
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    batchNumber: {
      type: String,
      default: '',
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['active', 'completed', 'dropped', 'on-hold'],
      default: 'active',
    },
    feesPaid: {
      type: Number,
      default: 0,
    },
    feesTotal: {
      type: Number,
      required: true,
    },
    feesRemaining: {
      type: Number,
      default: 0,
    },
    paymentHistory: [
      {
        amount: Number,
        date: { type: Date, default: Date.now },
        mode: { type: String, enum: ['cash', 'online', 'card', 'upi'], default: 'cash' },
        receiptNumber: String,
        notes: String,
      },
    ],
    attendance: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    performance: {
      type: String,
      enum: ['excellent', 'good', 'average', 'needs-improvement'],
      default: 'good',
    },
    notes: {
      type: String,
      default: '',
    },
    guardianName: String,
    guardianPhone: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

// Calculate fees remaining before saving
studentSchema.pre('save', function (next) {
  this.feesRemaining = this.feesTotal - this.feesPaid;
  next();
});

export default mongoose.model('Student', studentSchema);
