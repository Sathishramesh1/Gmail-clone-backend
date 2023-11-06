import express from 'express'
import {Compose} from '../controllers/EmailController/Compose.js'
import {Inbox} from '../controllers/EmailController/Inbox.js'
import {StaredEmail} from '../controllers/EmailController/StaredEmail.js'
import {ImportantEmail} from '../controllers/EmailController/ImportantEmail.js'
import {DeleteEmail} from '../controllers/EmailController/DeleteMail.js'
import { Sendbox } from '../controllers/EmailController/Senbox.js'
import { SaveDraft } from '../controllers/EmailController/SaveDraft.js'
import { GetDraft } from '../controllers/EmailController/GetDraft.js'
import { GetTrash } from '../controllers/EmailController/GetTrash.js'
import handler from '../middleware/upload.js'
import { GetStarred } from '../controllers/EmailController/GetStarred.js'
import { GetImportant } from '../controllers/EmailController/GetImportant.js'



const router=express.Router();

//router for sending email
router.route("/send").post(Compose);

//router for reading inbox
router.route("/inbox").get(Inbox);


//router for reading sendbox
router.route("/send").get(Sendbox);


//router marking email as starred
router.route("/starred").post(StaredEmail);


//router get starred email
router.route('/starred').get(GetStarred);



//router for marking message as important
router.route('/important').post(ImportantEmail);


//router get starred email
router.route('/important').get(GetImportant);



//route for deleting message
router.route('/delete').delete(DeleteEmail);


//router for reading trash message
router.route('/trash').get(GetTrash);


//route for draft saving message
router.route('/draft').post(SaveDraft);


//route for reading draft messgae
router.route('/getdraft').get(GetDraft);


//route for upload files
router.route('/upload').post(handler)



export { router as EmailRouter }
