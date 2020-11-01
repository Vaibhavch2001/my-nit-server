const router = require("express").Router();
const Subject = require("../models/subject");
const subjectController = require("../controllers/subject");
router.get('/all',subjectController.getAllSubjects);
router.post('/bySemAndBranch',subjectController.getSubjectsBySemesterAndBranch);
module.exports = router;
