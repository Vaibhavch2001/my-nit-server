const Document = require("../models/index").Document;
exports.getDocumentsBySubjectId = async(req,res)=>{
    try {
        const documentsCollection = await Document.findAll({
            where:{
                subjectId: req.body.subjectId
            }
        });
        res.status(200).send(documentsCollection);
    } catch (e) {
        console.log(e)
      res.status(500).send(e)
    }
}
exports.add = (req,res)=>{

}
exports.get = (req,res)=>{

}