import {Email} from '../../models/Email.js'


const Inbox=async(req,res)=>{
    try {
     const {userid} = req.params ;
      const userEmail= await Email.findById(userid).populate('inbox'); 
    if(userEmail){
       const InboxMail=userEmail.inbox;
       res.status(200).json({
           InboxMail,
           message:"Message retrived successfully"
       }) 
    }else{
        res.status(404).send("problem in retriving inbox mails");
    }
        
    } catch (error) {
    
    console.log(error);
     res.status(500).send("Internal Server Error");   
    }
}

export {Inbox}