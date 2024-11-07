const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        unique: true, // Ensure titles are unique
        trim: true,   // Trim whitespace
    },
    image: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // This will add createdAt and updatedAt timestamps
});

const MyProject = mongoose.model('MyProject', projectSchema);

module.exports = MyProject;
