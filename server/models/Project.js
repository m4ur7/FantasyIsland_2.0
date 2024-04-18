const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    iconUrl: { type: String, required: true },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
