import express from 'express'
import {Register} from '../controllers/Register.js'
import {Login} from '../controllers/Login.js'
import {Forget} from '../controllers/Forget.js'
import {Reset} from '../controllers/Reset.js'


const router=express.Router();

//route for registering new user
router.route('/register').post(Register);

//route for login
router.route('/login').post(Login);

//route for generating password reset mail
router.route('/forget').post(Forget);

//route for resetting new password
router.route('/reset/:resetToken').post(Reset);




export {router as UserRouter}