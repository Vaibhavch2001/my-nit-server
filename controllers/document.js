const Document = require("../models/index").Document;
exports.getDocumentsBySubjectId = async(req,res)=>{
    try {
        const documentsCollection = await Document.findAll({
            where:{
                SubjectId: req.body.SubjectId,
                isVerified:true
            }
        });
        res.status(200).send(documentsCollection);
    } catch (e) {
        console.log(e)
      res.status(500).send(e)
    }
}
exports.addDocument = async(req,res)=>{
    try {
        const document = await Document.create({ SubjectId: req.body.SubjectId,name:req.body.name,link:req.body.link,isVerified:0});
        res.status(200).send(document);
    } catch (e) {
        res.status(500).send(e);
    }
}
exports.add = (req,res)=>{

}
exports.get = (req,res)=>{

}