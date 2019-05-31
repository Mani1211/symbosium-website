const getDb=require('../utils/database').getDb;

class StudentDetails{
  constructor(studentName1,college1,department1,email1,phnno1){
    this.studentName1=studentName1;
    this.college1=college1;
    this.department1=department1;
    this.email1=email1;
    this.phnno1=phnno1;
  }
  save(){
    const db=getDb();
    return db.collection('registerDetails').insertOne(this)
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
module.exports=StudentDetails








