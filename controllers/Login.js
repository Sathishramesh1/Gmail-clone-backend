import bcrypt from 'bcrypt'
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken'

const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        let user= await User.findOne({email});

if (!user) {
            return res.status(401).json({ message: "Email is not Registered" });
      }

const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Wrong Password" });
          }
          let id=user._id ;
  const jwttoken = jwt.sign({ id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
          });
        
          res.status(200).json({ jwttoken,message:"login success" });
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server Error")
        
    }

}

export {Login}