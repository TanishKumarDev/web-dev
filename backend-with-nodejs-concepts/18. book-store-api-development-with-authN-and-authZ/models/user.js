const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

// Hash password before saving
// This middleware function will be called before saving a User document
// It checks if the password has been modified and if so, it hashes it
userSchema.pre('save', async function(next) {
  // If the password hasn't been modified, skip this middleware
  if (!this.isModified('password')) return next();

  // Hash the password
  this.password = await bcrypt.hash(this.password, 10);
  // Call the next middleware or save the document
  next();
});

// Compare passwords
// This method will be called to compare a candidate password with the one stored
// It returns a boolean indicating whether the passwords match
userSchema.methods.comparePassword = async function(candidatePassword) {
  // Compare the candidate password with the stored one
  return await bcrypt.compare(candidatePassword, this.password);
};

// Export the User model
module.exports = mongoose.model('User', userSchema);

