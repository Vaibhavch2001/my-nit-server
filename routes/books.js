const router = require("express").Router();
const booksController = require('../controllers/books')
router.post('/get',booksController.getBooksBySubjectId);
router.post('/add',booksController.addBook);
module.exports = router;
