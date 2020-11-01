const router = require("express").Router();
const controller = require('../controllers/pastPapers')
router.post('/get',controller.getPastPapersBySubjectId);
router.post('/add',controller.addPastPapers);
module.exports = router;

