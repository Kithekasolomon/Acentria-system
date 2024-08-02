import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    /*video: {
        type: String,
        required: true
    },*/
    
    duration: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        ref: 'lec'
    },
    subtitle: {
        type: String,
        required: true
    },
    expectations: {
        type: String,
        required: true
    },
requirements: [
    {
        type: String,
        required: true
    }
],

    level: {
        type: String,
        required: true
    },


    topic: [{
        type: String,
        required: true
    }]
})
const courseModel = mongoose.models.student || mongoose.model('Course', courseSchema);
export default courseModel;