import {Email} from '../models/Email.js'


const GetTrash=async(req,res)=>{

   try {
     
    const TrashEmail=await Email.findOne({user:req.user._id});
     
     if(TrashEmail){
         const getmail=TrashEmail.trash 
         res.status(200).json({
            message:getmail
         })
     }else{
         res.status(404).send("Unable to read trash")
     }

   } catch (error) {
    
     console.log(error);
     res.status(500).send("Internal server error");

   }

}



export {GetTrash}