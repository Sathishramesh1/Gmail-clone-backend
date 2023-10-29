import {Email} from '../../models/Email.js'

const DeleteEmail=async(req,res)=>{
    try {
          const {messageid}=req.params ;
       const checkEmail= await Email.findOne({
        $or: [
          { inbox: { $elemMatch: { _id: messageid } } },
          { send: { $elemMatch: { _id: messageid } } },
          { draft: { $elemMatch: { _id: messageid } } }
        ]   
       });
      
      //checking message is in which array
        if(checkEmail.inbox.id(messageid) || checkEmail.send.id(messageid) || checkEmail.draft.id(messageid) ){
    const deltedMessage= checkEmail.inbox.id(messageid) || checkEmail.send.id(messageid) || checkEmail.draft.id(messageid);
        checkEmail.trash.push(deltedMessage);
          

        checkEmail.inbox.pull(messageid) || checkEmail.send.pull(messageid) || checkEmail.draft.pull(messageid);// Remove the object from the array
        await checkEmail.save(); // Save the updated document
        res.status(200).json({ message: 'message deleted successfully' });
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