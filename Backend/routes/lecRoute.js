import express from 'express';
import { loginLec, registerLec } from "../controllers/lecController.js"


const lecRouter = express.Router();

lecRouter.post('/login', loginLec);

lecRouter.post('/register', registerLec);

export default lecRouter;