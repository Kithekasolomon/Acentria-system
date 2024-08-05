import examModel from "../models/examModel.js";
import fs from 'fs'

//add exam item
const addExam = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const exam = new examModel({
        title: req.body.title,
        subtitle: req.body.subtitle,
        instructor:req.body.instructor,
        image: image_filename,
    })
    try{
        await exam.save()
        res.json({success:true, message:"Exam added successfully"})
    } catch (error){
        console.log(error)
        res.json({success:false, message:"Error saving exam" , error:error})
        
    }
    
}
export {addExam}