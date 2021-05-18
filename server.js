const { response } = require("express")
const express=require("express")
const app=express()
const mongoose=require('mongoose')
const User = require("./models/User")
require('dotenv').config({path:'config/.env'})


app.use(express.json())
/* Connect Application with database  */
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true},{connectTimeoutMS: 10000},{poolSize: 10},{ writeConcern: { j: true
    }}
  ,(err)=>{
    if (err)
    throw err;
    else
    console.log('connect to db...')
})
// routes : 
app.use('/api',require('./routes/user'))
app.listen(5000,()=>{
    console.log("connected")
})