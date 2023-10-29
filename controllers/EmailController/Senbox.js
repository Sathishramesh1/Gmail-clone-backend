import {Email} from '../../models/Email.js'

const Sendbox=async(req,res)=>{
    try {
     const {userid} = req.params ;
      const userEmail= await Email.findById(userid).populate('send');

    if(userEmail){
        const SendEmail= userEmail.send;
       res.status(200).json({
           SendEmail,
           message:"Message retrived successfully"
       }) 

    }
        
    } catch (error) {
    
    console.log(error);
     res.status(500).send("Internal Server Error");
        
    }

}

export {Sendbox}