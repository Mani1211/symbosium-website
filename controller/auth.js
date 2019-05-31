const express = require('express')

const path = require('path');

const rootDir = require('../utils/path');

const User=require('../models/user');



    
exports.getSignUp=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'signup.html'));
  };

exports.postSignUp=(req,res,next)=>{
    const email=req.body.email;
    const password = req.body.password
    const confirmPassword=req.body.confirmPassword; 
    const users=new User(email,password,confirmPassword);
    users
    .save()
      .then(result => {
        console.log(result);
        console.log('signed up');
        res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      });
};
