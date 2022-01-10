class BlogController {

  index(req, res) {
    return res.render('pages/admin/blog/index')
  }

  create(req, res) {
    return res.render('pages/admin/blog/create')
  }

  detail(req, res) {
    console.log(req.params.id);
    return res.render('pages/admin/blog/detail', {
      id: req.params.id
    })
  }

}

module.exports = new BlogController()