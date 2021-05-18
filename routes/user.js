const express=require('express');
const User = require('../models/User');
const UserModel = require('../models/User');
const router=express.Router()




/* Get All users */
router.get('/users' , function (req , res) {
    UserModel.find().then(function (users) {
    res.send(users);
    });
   });
/* Add new user */
router.post('/user',(req,res)=>{
    const user=new UserModel(req.body)
    user.save()
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))

})
/* Update user by id */
router.put('/update/:id',(req,res)=>{
    UserModel.findByIdAndUpdate({_id:req.params.id},{...req.body})
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})
/* Delete user by id*/
router.delete('/delete/:id',(req,res)=>{
    UserModel.findByIdAndDelete({_id:req.params.id})
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})

   module.exports=router