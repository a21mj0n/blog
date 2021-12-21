const Blog = require("../models/Blog")
const fileService = require("../services/fileService")

class BlogService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture);
        const createdPost = await Blog.create({...post, picture: fileName});
        return createdPost;
    }

    async getAll() {
        const posts = await Blog.find();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const post = await Blog.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан ID')
        }
        const updatedPost = await Blog.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
            if (!id) {
                throw new Error('не указан ID')
            }
            const post = await Blog.findByIdAndDelete(id);
            return post;
    }
}


module.exports = new BlogService();
