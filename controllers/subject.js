const Subject = require("../models/index").Subject;
exports.getAllSubjects = async(req,res)=>{
    try {
        const subjectsCollection = await Subject.findAll();
        res.status(200).send(subjectsCollection);
    } catch (e) {
        console.log(e);
      res.status(500).send(e);
    }
}
exports.getSubjectsBySemesterAndBranch = async(req,res)=>{
    try {
        const subjectsCollection = await Subject.findAll({
            where:{
                semester:req.body.semester,
                branch:req.body.branch
            }
        });
        res.status(200).send(subjectsCollection);
    } catch (e) {
        console.log(e);
      res.status(500).send(e);
    }
}