const mongoose = require('mongoose');

const Userschema=new mongoose.Schema({
  googleId:{
    type:String,
    required:true
  },
  displayName:{
    type:String,
    required:true
  },
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  profileimage:{
     type: String,
  },
  CreatedAt:{
    type:Date,
    default:Date.now
  }
})

module.exports=mongoose.model('User',Userschema);
