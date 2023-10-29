import express from 'express'
import {Compose} from '../controllers/Compose.js'
import {Inbox} from '../controllers/Inbox.js'
import {StaredEmail} from '../controllers/StaredEmail.js'
import {ImportantEmail} from '../controllers/ImportantEmail.js'
import {DeleteEmail} from '../controllers/DeleteMail.js'
import { Sendbox } from '../controllers/Senbox.js'
import { SaveDraft } from '../controllers/SaveDraft.js'
import { GetDraft } from '../controllers/GetDraft.js'
import { GetTrash } from '../controllers/GetTrash.js'
import handler from '../middleware/upload.js'



const router=express.Router();

//router for sending email
router.route("/send").post(Compose);

//router for reading inbox
router.route("/inbox/:userid").get(Inbox);


//router for reading sendbox
router.route("/send/:userid").get(Sendbox);


//router marking email as starred
router.route("/starred/:userid/:messageid").patch(StaredEmail);


//router for marking message as important
router.route('/important/:userid/:messageid').patch(ImportantEmail);


//route for deleting message
router.route('/delete/:messageid').delete(DeleteEmail);


//router for reading trash message
router.route('/trash').get(GetTrash);


//route for draft saving message
router.route('/draft').post(SaveDraft);


//route for reading draft messgae
router.route('/getdraft').get(GetDraft);


//route for upload
router.route('/upload').post(handler)



export { router as EmailRouter }
