const router = require("express").Router();
const controller = require('../controllers/document')
router.post('/get',controller.getDocumentsBySubjectId);
router.post('/add',controller.addDocument);
module.exports = router;

