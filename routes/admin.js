const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

// const StudentDetails=require('../models/student');

const adminController=require('../controller/admin');

const router = express.Router();


router.get('/',adminController.getIndex );

// /admin/add-product => GET
router.get('/register', adminController.getRegisterPage);

// /admin/add-product => POST
router.post('/register',adminController.postRegisterPage)

//error page
exports.getErrorPage=(req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
}

module.exports = router;
