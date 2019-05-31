const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

// const StudentDetails=require('../models/student');

const authController=require('../controller/auth');

const router = express.Router();


router.get('/signup',authController.getSignUp)

router.post('/signup',authController.postSignUp);

module.exports = router;