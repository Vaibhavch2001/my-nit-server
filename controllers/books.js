const Book = require("../models/index").Book;
exports.getBooksBySubjectId = async(req,res)=>{
    try {
        const booksCollection = await Book.findAll({
            where:{
                SubjectId: req.body.SubjectId,
                isVerified:1
            }
        });
        res.status(200).send(booksCollection);
    } catch (e) {
        console.log(e)
      res.status(500).send(e)
    }
}
exports.addBook = async(req,res)=>{
    try {
        const book = await Book.create({ SubjectId: req.body.SubjectId,name:req.body.name,link:req.body.link,isVerified:0});
        res.status(200).send(book);
    } catch (e) {
        res.status(500).send(e);
    }
}
exports.add = (req,res)=>{

}
exports.get = (req,res)=>{

}