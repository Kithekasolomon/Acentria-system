import mongoose from "mongoose";
  
const lecSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    role: { type: String, enum: ["admin", "instructor", "student"] },
    date: { type: Date, default: Date.now }
})
const lecModel = mongoose.models.student || mongoose.model('lec', lecSchema);
export default lecModel;