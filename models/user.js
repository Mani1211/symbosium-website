const getDb=require('../utils/database').getDb;
class User{
    constructor(email,password,confirmPassword){
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
    }
    save(){
        const db=getDb();
        return db.collection('users').insertOne(this)
        .then(result=>{
          console.log(result)
        })
        .catch(err=>{
          console.log(err)
        })
      }
}
module.exports=User;