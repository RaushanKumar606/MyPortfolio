// models/Contact.js
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
    trim: true,
  },

});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;