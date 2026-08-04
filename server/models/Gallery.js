import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide image title'],
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide image URL'],
    },
    category: {
      type: String,
      enum: ['classroom', 'event', 'achievement', 'infrastructure', 'other'],
      default: 'other',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    tags: [String],
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Gallery', gallerySchema);
