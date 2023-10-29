import {Email} from '../../models/Email.js'


const Inbox=async(req,res)=>{
    try {
    
      const userEmail= await Email.findOne({user:req.user._id}).populate('inbox'); 
    if(userEmail){
       const InboxMail=userEmail.inbox;
       res.status(200).json({
           InboxMail,
           message:"Message retrived successfully"
       }) 
    }else{
        res.status(404).send("problem in retriving inbox mails or no user found");
    }
        
    } catch (error) {
    
    console.log(error);
     res.status(500).send("Internal Server Error");   
    }
}

export {Inbox}