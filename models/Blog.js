const mongoose = require('mongoose')

const Blog = new mongoose.Schema({
    author: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    picture: {
        type: String
    },
    created_at: {
        type: String,
        default: new Date()
    }

})

module.exports = mongoose.model('Blog', Blog)
