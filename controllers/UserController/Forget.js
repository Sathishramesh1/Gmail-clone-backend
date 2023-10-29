import {User} from '../../models/User.js'
import crypto from 'crypto'
import {sendMail} from '../../service/mailService.js'


const Forget = async(req,res)=>{

try {
     const{email}=req.body;
  const user= await User.findOne({email:email});
  if(!user){
     return res.status(400).send("The email is not Registered");
 }

 // Generate a random token
 const token = crypto.randomBytes(25).toString("hex");

  // Store the token in the database
  user.resetToken = token;
  await user.save();
  
  //send password resetting mail
  sendMail(email,"password-reset","password reset link");

  res.status(200).json({message:`The password reset mail send to ${email}`})

} catch (error) {
    console.log("User email not found",error);
    res.status(404).send("Error occured ",error);
}


}


export {Forget}