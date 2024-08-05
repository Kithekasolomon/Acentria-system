import express from 'express';
import { addExam } from '../controllers/examController.js';
import multer from "multer"


const examRouter = express.Router();



//image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename:(req, file, cb) =>{
   return cb(null, `${Date.now()}${file.originalname}`);
  }
});
const upload=multer({storage:storage})


examRouter.post("/add", upload.single("image"),addExam)




export default examRouter