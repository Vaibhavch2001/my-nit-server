const PastPapers = require("../models/index").PastPapers;
exports.getPastPapersBySubjectId = async(req,res)=>{
    try {
        const pastPapersCollection = await PastPapers.findAll({
            where:{
                SubjectId: req.body.SubjectId,
                isVerified:true
            }
        });
        res.status(200).send(pastPapersCollection);
    } catch (e) {
        console.log(e)
      res.status(500).send(e)
    }
}
exports.addPastPapers = async(req,res)=>{
    try {
        const pastPaper = await PastPapers.create({ SubjectId: req.body.SubjectId,name:req.body.name,link:req.body.link,isVerified:0});
        res.status(200).send(pastPaper);
    } catch (e) {
        res.status(500).send(e);
    }
}
exports.add = (req,res)=>{

}
exports.get = (req,res)=>{

}