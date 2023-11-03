
import {User} from '../../models/User.js'
import {Email, date} from '../../models/Email.js'


const Compose=async (req,res)=>{
    
    try {
      const {to}=req.body;
        
      const receiver= await User.findOne({email:to});
      
      const sender= await User.findOne({email:req.user.email});
        // console.log(sender,"sender",receiver,"reciver");
      if(receiver&&sender){
        // storing mail in reciver inbox 
     await Email.findOneAndUpdate({user:receiver._id}
         ,{$push:{inbox:{...req.body,date:date,sender_name:sender.name}}},
         { upsert: true, new: true });
         //storing mail in sender send box
     await Email.findOneAndUpdate({user:sender._id}
            ,{$push:{send:{...req.body,date:date,reciver_name:receiver.name}}},
            { upsert: true, new: true });
           
                res.status(201).json({meassage:"mail send"});
     }else{

      res.status(404).send("unable to find user")
     }
        
    } catch (error) {
        console.log("error",error);
        res.status(500).send("Internal server error");

    }
}

export {Compose}