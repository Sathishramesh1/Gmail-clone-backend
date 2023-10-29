import {Email} from '../../models/Email.js'

const Sendbox=async(req,res)=>{
    try {
     
      const userEmail= await Email.findOne({user:req.user._id}).populate('send');

    if(userEmail){
        const SendEmail= userEmail.send;
       res.status(200).json({
           SendEmail,
           message:"Message retrived successfully"
       }) 
    }else{
        res.status(404).send("No user Found");
    }
        
    } catch (error) {
    
    console.log(error);
     res.status(500).send("Internal Server Error");
        
    }

}

export {Sendbox}