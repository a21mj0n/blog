const mongoose = require('mongoose')

const Blog = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    picture: {type: String}
})

module.exports = mongoose.model('Blog', Blog)
