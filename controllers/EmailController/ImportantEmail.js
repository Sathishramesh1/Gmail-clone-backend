import {Email} from '../../models/Email.js'


//marking and unmarking important email
const ImportantEmail = async(req,res)=>{
   try {
    const {messageid}=req.query;

    const checkEmail= await Email.findOne({
      $or: [
        { inbox: { $elemMatch: { _id: messageid } } },
        { send: { $elemMatch: { _id: messageid } } },
        { draft: { $elemMatch: { _id: messageid } } }
      ]   
     });
     if (checkEmail) {
      const inboxMessage = checkEmail.inbox.find(message => message._id == messageid);
      const sendMessage = checkEmail.send.find(message => message._id == messageid);
      const draftMessage = checkEmail.draft.find(message => message._id == messageid);
  
      if (inboxMessage) {
        inboxMessage.important = !inboxMessage.important;
      } else if (sendMessage) {
        sendMessage.important = !sendMessage.important;
      } else if (draftMessage) {
        draftMessage.important = !draftMessage.important;
      }
  
      await checkEmail.save();
      res.status(200).send("The message is marked as important and vice versa");
     
    
      }else{
         res.status(404).send(" Problem with marking email as important");
} 
   } catch (error) {
    console.log(error);
        res.status(500).send("Internal server Error");
   }
}


export {ImportantEmail}