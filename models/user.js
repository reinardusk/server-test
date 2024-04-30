const mongoose = require('mongoose');
// const { hashPassword } = require('../utils/bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

// hooks before create
userSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  // this.password = hashPassword(this.password)
  next();
});

module.exports = mongoose.model('users', userSchema)