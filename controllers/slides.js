const Slide = require("../models/index").Slide;
exports.getSlidesBySubjectId = async(req,res)=>{
    try {
        const slidesCollection = await Slide.findAll({
            where:{
                subjectId: req.body.subjectId,
                isVerified:true
            }
        });
        res.status(200).send(slidesCollection);
    } catch (e) {
        console.log(e)
      res.status(500).send(e)
    }
}
exports.addSlide = async(req,res)=>{
    try {
        const slide = await Slide.create({ subjectId: req.body.subjectId,name:req.body.name,link:req.body.link,isVerified:0});
        res.status(200).send(slide);
    } catch (e) {
        res.status(500).send(e);
    }
}