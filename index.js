import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbconnection} from './databse/dbconnection.js'

import {UserRouter} from './Routes/UserRouter.js'
import {EmailRouter} from './Routes/EmailRouter.js'
import {isAuthorized} from './middleware/isAuthorised.js'
import cron from 'node-cron';
import { Email } from './models/Email.js'

//configuration .env files
dotenv.config();



//assign app to express server
const app=express();
app.use(cors());
app.use(express.json());




//database connection
dbconnection();

const PORT=process.env.PORT;


//ROUTES
app.use("/api",UserRouter);
app.use("/mail",isAuthorized,EmailRouter);


//cron for auto delete
cron.schedule('0 0 * * *', async () => {
    try {
      // Calculate the date 30 days ago
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
   
      // Use Mongoose query to selectively remove old messages from the trash array
      const result = await Email.updateMany(
        { 'trash.timestamp': { $lt: thirtyDaysAgo } },
        { $pull: { trash: { timestamp: { $lt: thirtyDaysAgo } } } }
      );
      console.log('Trash cleaned successfully through scheduled task:', result);
    } catch (error) {
      console.error('Error cleaning trash through scheduled task:', error);
    }
  });



app.get("/",(req,res)=>{
    res.status(200).send("server working");
})





app.listen(PORT,()=>{
    console.log("server running on ",PORT);  
})