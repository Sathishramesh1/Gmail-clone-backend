
import {User} from '../models/User.js'
import {Email} from '../models/Email.js'


const Compose=async (req,res)=>{
    try {
      const {from,to,subject,content}=req.body;
        
      const receiver= await User.findOne({email:to});
      const sender= await User.findOne({email:from});
     
      if(receiver&&sender){
        // storing mail in reciver inbox 
     const checkReciver=await Email.findOneAndUpdate({user:receiver._id}
         ,{$push:{inbox:{...req.body}}},
         { upsert: true, new: true });
         //storing mail in sender send box
     const checkSender=await Email.findOneAndUpdate({user:sender._id}
            ,{$push:{send:{...req.body}}},
            { upsert: true, new: true });
           
                res.status(201).json({meassage:"mail send"});
      }

        
    } catch (error) {
        console.log("error",error);
        res.status(500).send("Internal server error");

    }



}
export {Compose}