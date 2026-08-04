import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a course title'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a course description'],
    },
    shortDescription: {
      type: String,
      maxlength: 200,
    },
    category: {
      type: String,
      required: true,
      enum: ['web-development', 'programming', 'design', 'marketing', 'language', 'academic', 'other'],
    },
    duration: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPrice: {
      type: Number,
      min: 0,
    },
    image: {
      type: String,
      default: '',
    },
    syllabus: [
      {
        module: String,
        topics: [String],
      },
    ],
    features: [String],
    requirements: [String],
    whatYouWillLearn: [String],
    instructor: {
      type: String,
      default: 'EduRise Academy',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    enrolledCount: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: [
      {
        student: String,
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create slug from title before saving
courseSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

export default mongoose.model('Course', courseSchema);
