const router = require("express").Router();
const controller = require('../controllers/slides')
router.post('/get',controller.getSlidesBySubjectId);
router.post('/add',controller.addSlide);
module.exports = router;

