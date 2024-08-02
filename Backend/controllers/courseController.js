import courseModel from "../models/courseModel.js";
import fs from 'fs'

//add courses
const addCourse = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const course = new courseModel({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        instructor: req.body.instructor,
        duration: req.body.duration,
        topic: req.body.topic,
        image: image_filename,
        subtitle: req.body.subtitle,
        requirements: req.body.requirements,
        expectations: req.body.expectations,
        level: req.body.level,
        
    })
    try {
        await course.save();
        res.json({success:true ,message:"Course added"})
    } catch (error) {
        res.json({success:false,message:"Error saving",error:error})
        
    }
    
}
//all course list
const listCourse = async (req, res) => { 
    try {
        const courses = await courseModel.find({});
        res.json({success:true, data:courses})
    } catch (error) {
        res.json({success:false,message:"Error fetching courses",error:error})
        
    }
}
//remove course item

const removeCourse = async (req, res) => {
    try {
        const course = await courseModel.findByIdAndDelete(req.body.id);
        if(!course){
            return res.json({success:false,message:"Course not found"})
        }
        fs.unlinkSync(`uploads/${course.image}`, () => { })
        await courseModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Course deleted"})
    } catch (error) {
        res.json({success:false,message:"Error deleting course",error:error})
        
    }
}
export {addCourse,listCourse,removeCourse}