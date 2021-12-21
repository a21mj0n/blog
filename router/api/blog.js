const Router = require('express')
const BlogController = require("../../controllers/api/BlogController")

const router = new Router()

router.post('/', BlogController.create)
router.get('/', BlogController.getAll)
router.get('/:id', BlogController.getOne)
router.put('/', BlogController.update)
router.delete('/:id', BlogController.delete)

module.exports = router;
