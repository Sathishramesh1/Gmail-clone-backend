import express from 'express'
import {Compose} from '../controllers/Compose.js'
import {Inbox} from '../controllers/Inbox.js'
import {StaredEmail} from '../controllers/StaredEmail.js'
import {ImportantEmail} from '../controllers/ImportantEmail.js'
import {DeleteEmail} from '../controllers/DeleteMail.js'
import { Sendbox } from '../controllers/Senbox.js'



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


//route for draft message
router.route('/draft').post()


export { router as EmailRouter }
