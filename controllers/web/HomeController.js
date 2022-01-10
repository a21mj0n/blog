const BlogService = require('../../services/BlogService')

class HomeController {

  async index(req, res) {
    
    const blogs = await BlogService.getAll();

    return res.render('pages/frontend/home', {
      blogs,
    })
  }

}

module.exports = new HomeController()