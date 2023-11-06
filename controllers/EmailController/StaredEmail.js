import {Email} from '../../models/Email.js'


const StaredEmail=async(req,res)=>{
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
        inboxMessage.starred = !inboxMessage.starred;
      } else if (sendMessage) {
        sendMessage.starred = !sendMessage.starred;
      } else if (draftMessage) {
        draftMessage.starred = !draftMessage.starred;
      }
  
      await checkEmail.save();
      res.status(200).send("The message is marked");
     
     }else{
      res.status(404).send("problem in retriving draft mails");

     }
      
    } catch (error) {
        
    console.log(error);
    res.status(500).send("Internal server Error");
         
    }
}

export {StaredEmail}