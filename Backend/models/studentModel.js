import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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
    enrolledCourses: [{
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            default:{}
        },
        courseTitle: String,
        courseDuration: String
    }]
},{minimize: false})
const studentModel = mongoose.models.student ||mongoose.model("student", studentSchema);
export default studentModel;