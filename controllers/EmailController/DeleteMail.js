import {Email} from '../../models/Email.js'

const DeleteEmail=async(req,res)=>{
    try {
          const {messageid}=req.query ;
       const checkEmail= await Email.findOne({
        $or: [
          { inbox: { $elemMatch: { _id: messageid } } },
          { send: { $elemMatch: { _id: messageid } } },
          { draft: { $elemMatch: { _id: messageid } } }
        ]   
       });
      
      //checking message is in which array
    //     if(checkEmail.inbox.id(messageid) || checkEmail.send.id(messageid) || checkEmail.draft.id(messageid) ){
    //  const deltedMessage= checkEmail.inbox.id(messageid) || checkEmail.send.id(messageid) || checkEmail.draft.id(messageid);
    //   checkEmail.trash.push(deltedMessage);
          

    //     checkEmail.inbox.pull(messageid) || checkEmail.send.pull(messageid) || checkEmail.draft.pull(messageid);// Remove the object from the array
    //     await checkEmail.save(); // Save the updated document
    //     res.status(200).json({ message: 'message deleted successfully' });
    //       }
          

    if (checkEmail) {
      let deletedMessage;
      
      // Check and delete from inbox array
      deletedMessage = checkEmail.inbox.find(message => message._id == messageid);
      if (deletedMessage) {
        checkEmail.inbox.pull(messageid);
      }

      // Check and delete from send array
      deletedMessage = checkEmail.send.find(message => message._id == messageid);
      if (deletedMessage) {
        checkEmail.send.pull(messageid);
      }

      // Check and delete from draft array
      deletedMessage = checkEmail.draft.find(message => message._id == messageid);
      if (deletedMessage) {
        checkEmail.draft.pull(messageid);
      }

      // Move the deleted message to the trash array
      if (deletedMessage) {
        checkEmail.trash.push(deletedMessage);
        await checkEmail.save(); // Save the updated document
        res.status(200).json({ message: 'Message deleted successfully' });
      } 
    }
       else {
        res.status(404).json({ message: 'Document not found' });
      }
          
      } catch (error) {
    
       console.log(error);
       res.status(500).send("internal server error");

      }
}


export {DeleteEmail}