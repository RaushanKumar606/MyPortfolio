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
        unique: true, 
        trim: true,   
    },
    Icone: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    demoLink:{
        type:String,
    }
}, {
    timestamps: true, // This will add createdAt and updatedAt timestamps
});

const MyProject = mongoose.model('MyProject', projectSchema);

module.exports = MyProject;
