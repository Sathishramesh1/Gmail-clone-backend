import {Email} from '../../models/Email.js'


//marking and unmarking important email
const ImportantEmail = async(req,res)=>{
   try {
    const {userid,messageid}=req.params;
     const userEmail= await Email.findOne({user:userid}).populate('inbox') ;
     
    if(userEmail){
    let changeValue=userEmail.inbox.find((message)=>message._id==messageid).important ; 
    userEmail.inbox.find((message)=>message._id==messageid).important =!changeValue ;      
    userEmail.save()

       res.status(200).send("The message  is marked as important");
     }else{
         res.status(404).send(" Problem with marking email as important");
} 
   } catch (error) {
    console.log(error);
        res.status(500).send("Internal server Error");
   }
}


export {ImportantEmail}