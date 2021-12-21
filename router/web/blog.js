const express = require('express')
const router = express.Router();
const BlogController = require('../../controllers/web/BlogController')

router.get('/', BlogController.index);
router.get('/create', BlogController.create);
router.get('/:id', BlogController.detail);

module.exports = router