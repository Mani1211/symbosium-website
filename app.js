const path = require('path');

const express = require('express');
const helmet=require('helmet')
const compression= require('compression')

const bodyParser = require('body-parser');


const app = express();

const mongodb=require('mongodb')
const adminRoutes = require('./routes/admin');
const authRoutes=require('./routes/auth');

const mongoConnect=require('./utils/database').mongoConnect;


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet());
app.use(compression());
app.use(adminRoutes);
app.use(authRoutes);

mongoConnect(()=>{
    app.listen(process.env.PORT || 8000)
    
  })
  

                            