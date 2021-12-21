class BlogController {

  index(req, res) {
    return res.render('frontend/blog/index', {
      layout: 'main'
    })
  }

  create(req, res) {
    return res.render('frontend/blog/create', {
      layout: 'main'
    })
  }

  detail(req, res) {
    console.log(req.params.id);
    return res.render('frontend/blog/detail', {
      layout: 'main',
      id: req.params.id
    })
  }

}

module.exports = new BlogController()