// models/Contact.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
    trim: true,
  },
  degree: {
    type: String,
    required: true,
    trim: true,
  },
  field: {  // Corrected spelling from 'fidel'
    type: String,
    required: true,
  },
  start_date: {
    type: Date,  // Changed to Date for full date support
    required: true,
  },
  end_date: {
    type: Date,  // Changed to Date for full date support
    required: true,
  },
  grade: {  
    type: Number,
    required: true,
  },
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
