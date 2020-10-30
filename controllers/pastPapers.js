const PastPapers = require("../models/index").PastPapers;
exports.getPastPapersBySubjectId = async(req,res)=>{
    try {
        const pastPapersCollection = await PastPapers.findAll({
            where:{
                subjectId: req.body.subjectId,
                isVerified:true
            }
        });
        res.status(200).send(pastPapersCollection);
    } catch (e) {
        console.log(e)
      res.status(500).send(e)
    }
}
exports.add = (req,res)=>{

}
exports.get = (req,res)=>{

}