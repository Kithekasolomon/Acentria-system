import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    }
    
})

const examModel = mongoose.models.exam || mongoose.model("exam", examSchema)

export default examModel;