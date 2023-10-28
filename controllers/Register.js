import bcrypt from 'bcrypt'
import {User} from '../models/User';

const Register=async(req,res)=>{
 
    try{
        // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    // console.log(user)
    if (user) {
      return res.status(400).send('That user already exisits!');}

    const {password}=req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser= await new User({ ...req.body, password: hashedPassword }).save();
    
    res.status(201).json({
        status:'success',
        message:"new user created"
    })
    }catch(err){
        console.log("error in creating new user",err);
        res.status(500).send("Internal Error");
    }

}

export {Register}