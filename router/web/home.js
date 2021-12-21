const express = require('express')
const router = express.Router();
const HomeController = require('../../controllers/web/HomeController')

router.get('', HomeController.index);

module.exports = router