import {Email} from '../../models/Email.js'

const DeleteEmail=async(req,res)=>{
    try {
      
         const {messageid}=req.query;
        console.log(messageid);
       const checkEmail= await Email.findOne({
        $or: [
          { inbox: { $elemMatch: { _id: messageid } } },
          { send: { $elemMatch: { _id: messageid } } },
          { draft: { $elemMatch: { _id: messageid } } }
        ]   
       });
      
          

if (checkEmail) {
      let deletedMessage;
     
     if(checkEmail.inbox.some((message)=>message._id==messageid)){
       deletedMessage=checkEmail.inbox.find((message)=>message._id==messageid);
      checkEmail.inbox.pull(messageid);
      checkEmail.trash.push(deletedMessage);
         checkEmail.save();
     return res.status(200).send("message deleted");
 }else if(checkEmail.send.some((message)=>message._id==messageid)){
      deletedMessage=checkEmail.send.find((message)=>message._id==messageid);
      checkEmail.send.pull(messageid);
      checkEmail.trash.push(deletedMessage);
         checkEmail.save();
     return res.status(200).send("message deleted");

  }else if(checkEmail.draft.some((message)=>message._id==messageid)){
     
      deletedMessage=checkEmail.draft.find((message)=>message._id==messageid);
      checkEmail.draft.pull(messageid);
      checkEmail.trash.push(deletedMessage);
         checkEmail.save();
     return res.status(200).send("message deleted");

     } 
      
    }else {
        res.status(404).json({ message: 'Document not found' });
      }
          
      } catch (error) {
    
       console.log(error);
       res.status(500).send("internal server error");

      }
}


export {DeleteEmail}