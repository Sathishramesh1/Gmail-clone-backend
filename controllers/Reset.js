import {User} from '../models/User.js' ;
import bcrypt from 'bcrypt'


//function for resetting password
const Reset=async(req,res)=>{
try {
    const { resetToken } = req.params;
    const { password } = req.body;

    // Finding the user  token
  const user = await User.findOne({ resetToken:resetToken });

  if (!user) {
    return res.status(404).json({ message: "Invalid token" });
  }
   // Update the user's password and delete token
   user.resetToken = undefined;
   const hashedPassword = await bcrypt.hash(password,10);
   user.password = hashedPassword;
   await user.save();
 
   return res.status(201).json({ message: "Password reset successfully" });
  
    
} catch (error) {
    res.status(500).send('Internal server error');
    console.log(error)
    
}



}

export {Reset}