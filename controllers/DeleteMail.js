import {Email} from '../models/Email.js'

const DeleteEmail=async(req,res)=>{
    try {
          const {messageid}=req.params ;
       const checkEmail= await Email.findOne({
           inbox:{
            $elemMatch:{_id:messageid}
           }
       });
       if(checkEmail){
        checkEmail.inbox.pull(messageid);// Remove the object from the array
        await checkEmail.save(); // Save the updated document
        res.status(200).json({ message: 'Object deleted successfully' });
      } else {
        res.status(404).json({ message: 'Document not found' });
      }
          
      } catch (error) {
    
       console.log(error);
       res.status(500).send("internal server error");

      }
}


export {DeleteEmail}