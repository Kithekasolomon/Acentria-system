import studentModel from "../models/studentModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//create token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// register student

const registerStudent = async (req, res) => {
  const { name, email, password } = req.body;

  // check if email already exists
  try {
    const existingUser = await studentModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ success:false, message: "Email already exists." });
      }
       // validate inputs
  if (!validator.isLength(name, { min: 3, max: 50 })) {
    return res
      .status(400)
      .json({ success:false, message: "Name should be between 3 and 50 characters long." });
  }

  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({success:false, message: "Please enter a valid email address." });
  }

  if (!validator.isLength(password, { min: 8, max: 20 })) {
    return res
      .status(400)
        .json({
            success:false,
        message: "Password should be between 8 and 20 characters long.",
      });
      }
      // hash the password
      const salt =await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt);
      //new student
      const newStudent = new studentModel({
        name:name,
        email:email,
        password: hashedPassword,
      });
      // save the student
      const student=await newStudent.save();
      // generate token
      const token = createToken(student._id)
      res.json({ success: true, token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    
  }
 
};
//login student

const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  // check if email exists
  try {
    const student = await studentModel.findOne({ email });
  if (!student) {
    return res.status(401).json({ success:false, message: "Invalid credentials." });
      }

      //compare hashed password
      const isMatch = await bcrypt.compare(password, lec.password);
  if (!isMatch) {
    return res.status(401).json({ success:false, message: "Invalid credentials." });
      }
      //token
      const token = createToken(student._id);
      res.json({ success: true, token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    
  }

  
  
};
export { loginStudent, registerStudent };
