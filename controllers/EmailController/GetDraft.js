import {Email} from '../../models/Email.js'


const GetDraft=async(req,res)=>{
    try {
        
const userEmail= await Email.findOne({user:req.user_id}).populate('draft'); 
       if(userEmail){
          const DraftMail=userEmail.draft;
          res.status(200).json({
              DraftMail,
              message:"Message retrived successfully"
          }) 
       }else{
           res.status(404).send("problem in retriving draft mails");
       }
           
       } catch (error) {
       
       console.log(error);
        res.status(500).send("Internal Server Error");   
       }


}

export {GetDraft}