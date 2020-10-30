const Slide = require("../models/index").Slide;
exports.getSlidesBySubjectId = async(req,res)=>{
    try {
        const slidesCollection = await Slide.findAll({
            where:{
                subjectId: req.body.subjectId
            }
        });
        res.status(200).send(slidesCollection);
    } catch (e) {
        console.log(e)
      res.status(500).send(e)
    }
}
exports.add = (req,res)=>{

}
exports.get = (req,res)=>{
    
}