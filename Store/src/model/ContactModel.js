// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: false,
    trim: true,
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
