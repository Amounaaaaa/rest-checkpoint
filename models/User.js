
const mongoose=require('mongoose')
const validator = require('validator')
/*Create a person Schema*/
const UserSchema=new mongoose.Schema({ 
    name:{
        type:String,
    },
    age:{
        type:Number,
        
 
    }})
   

//Exporter le model 
module.exports=mongoose.model('user',UserSchema)