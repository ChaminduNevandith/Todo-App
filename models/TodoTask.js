// Importing mongoose module
const mongoose = require('mongoose');

// Defining a schema for the todo task
const todoTaskSchema = new mongoose.Schema({
    // Content of the todo task, it's a string and is required
    content: {
        type: String,
        required: true
    },
    // Date of the todo task, it's a Date type and has a default value of the current date and time
    date: {
        type: Date,
        default: Date.now
    }
});

// Exporting the todo task model, defining a model named 'TodoTask' using the todoTaskSchema
module.exports = mongoose.model('TodoTask', todoTaskSchema);
