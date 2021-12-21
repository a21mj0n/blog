class HomeController {

  index(req, res) {
    console.log('home controller');
    return res.render('frontend/home', {
      layout: 'main'
    })
  }

}

module.exports = new HomeController()