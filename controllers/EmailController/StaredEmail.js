import {Email} from '../../models/Email.js'


const StaredEmail=async(req,res)=>{
    try {
     const {messageid}=req.params;
     const userEmail= await Email.findOne({ user:req.user._id}).populate('inbox');
     
     if(userEmail){
       let changeValue=userEmail.inbox.find((message)=>message._id==messageid).starred ; 
       userEmail.inbox.find((message)=>message._id==messageid).starred =!changeValue ;      
       userEmail.save()
       res.status(200).send("The message  is marked ")
     }
      
    } catch (error) {
        
    console.log(error);
    res.status(500).send("Internal server Error");
         
    }
}

export {StaredEmail}