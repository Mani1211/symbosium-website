const path = require('path');

const rootDir = require('../utils/path');

const express = require('express')

const StudentDetails=require('../models/student');

exports.getIndex=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
  };

  exports.getRegisterPage=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'register.html'));
  };

  exports.postRegisterPage= (req, res, next) => {
    // console.log(req.body);
     const studentName1=req.body.studentName1;
   const college1 = req.body.college1;
   const department1=req.body.department1;
   const email1=req.body.email1;
   const phnno1=req.body.phnno1;
   
   const studentDetails=new StudentDetails(studentName1,department1,college1,email1,phnno1);
   studentDetails
   .save()
     .then(result => {
       console.log(result);
       console.log('Registered');
       res.redirect('/');
     })
     .catch(err => {
       console.log(err);
     });
 };


   