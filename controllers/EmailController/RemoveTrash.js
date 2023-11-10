import {Email} from '../../models/Email.js'


const RemoveTrash=async(req,res)=>{

try {
      const {messageid}=req.query;
// console.log(messageid)
      const findTrash=await Email.findOne({
       user:req.user._id
      });
      
    if(findTrash){
       const deletedMessage=findTrash.trash.some((message)=>message._id==messageid);
        if(deletedMessage){
         findTrash.trash.pull({_id:messageid});
          await findTrash.save();
          return res.status(202).send("message deleted successfully");
        }else{

            return res.status(404).send("unable to find the message");
        }       

    }else{
        
   return res.status(404).send("unable to find user");
      
}
    
} catch (error) {
  console.log(error);
  return res.status(500).send("internal error");
    
}
}


export {RemoveTrash}