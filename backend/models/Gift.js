/**
 * models/Gift.js — Item/gift listing model.
 */
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true, trim: true, maxlength: 500 },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: true }
);

const giftSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    description: { type: String, required: true, trim: true, maxlength: 2000 },
    category: {
      type: String,
      required: true,
      enum: ['Furniture', 'Electronics', 'Clothing', 'Books', 'Toys', 'Kitchen', 'Sports', 'Other'],
      index: true,
    },
    condition: {
      type: String,
      enum: ['New', 'Like New', 'Good', 'Used', 'For Parts'],
      default: 'Good',
    },
    image_url: { type: String, default: '' },
    location: { type: String, default: '', trim: true },
    status: { type: String, enum: ['Available', 'Reserved', 'Gifted'], default: 'Available' },
    posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [commentSchema],
  },
  { timestamps: true }
);

// Text index used by keyword search.
giftSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Gift', giftSchema);
