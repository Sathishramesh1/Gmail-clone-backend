import { Email, date } from "../../models/Email.js"


const SaveDraft=async(req,res)=>{

try {
      const{to,subject,content}=req.body;
   //  console.log(req.body);
   if(to||subject||content){
    const saveEmail=await Email.findOneAndUpdate({user:req.user._id}
    ,{$push:{draft:{...req.body,date:date}}},
       { upsert: true, new: true });
       
      res.status(201).send("dradt saved"); 
     }
    
} catch (error) {
    
   console.log(error);
   res.status(500).send("Internal server Error");

}


}

export {SaveDraft}