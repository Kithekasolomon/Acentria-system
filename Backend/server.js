import express from 'express';
import cors from "cors";
import { connectDB } from './config/db.js';
import courseRouter from './routes/courseRoute.js';
import studentRouter from './routes/studentRoute.js';
import 'dotenv/config'
import lecRouter from './routes/lecRoute.js';
import examRouter from './routes/examRoute.js';


const app = express();


const port=4000

app.use(cors());
app.use(express.json());

//db connection
connectDB()
//api endpoints
app.use("/api/course", courseRouter)
app.use("/images", express.static("uploads"))
app.use("/api/student", studentRouter)
app.use("/api/lec",lecRouter)
app.use("/api/exam",examRouter)



app.get("/", (req, res) => {
    res.send("API Woorking")
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
//mongodb+srv://Solomon:841512@cluster0.kybe64k.mongodb.net/?