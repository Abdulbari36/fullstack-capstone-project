/**
 * models/User.js — User model with bcrypt password hashing.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 30 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    first_name: { type: String, default: '', trim: true },
    last_name: { type: String, default: '', trim: true },
    location: { type: String, default: '', trim: true },
    bio: { type: String, default: '', maxlength: 300 },
    avatar_url: { type: String, default: '' },
  },
  { timestamps: true }
);

/** Hash password before save if modified. */
userSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/** Instance helper to verify a plaintext password. */
userSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

/** Never leak the hash in JSON responses. */
userSchema.methods.toJSON = function toJSON() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('User', userSchema);
