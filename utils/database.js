const mongodb = require('mongodb')

const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect=callback=>{

  MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-gbk2u.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`,{useNewUrlParser: true })
  .then(client=>{
    console.log('connected!');
    _db=client.db();
    callback();   
  })  
  .catch(err=>{
    console.log(err)
    throw err
  })
}

const getDb=()=>{
  if(_db){
  return _db
}
throw 'No database found'
}


exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
