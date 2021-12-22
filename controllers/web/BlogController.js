class BlogController {

  index(req, res) {
    return res.render('admin/blog/index', {
      layout: 'admin'
    })
  }

  create(req, res) {
    return res.render('admin/blog/create', {
      layout: 'admin'
    })
  }

  detail(req, res) {
    console.log(req.params.id);
    return res.render('admin/blog/detail', {
      layout: 'admin',
      id: req.params.id
    })
  }

}

module.exports = new BlogController()