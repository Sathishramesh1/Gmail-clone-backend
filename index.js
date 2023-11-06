import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbconnection} from './databse/dbconnection.js'

import {UserRouter} from './Routes/UserRouter.js'
import {EmailRouter} from './Routes/EmailRouter.js'
import {isAuthorized} from './middleware/isAuthorised.js'

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


app.get("/",(req,res)=>{
    res.status(200).send("server working");
})





app.listen(PORT,()=>{
    console.log("server running on ",PORT);  
})