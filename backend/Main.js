const path = require('path');
 require('dotenv').config()


const { log } = require('console');
const express = require('express');
const app = express();
const router = require('./Router');
const mongoose =require('mongoose');
const cors = require("cors")
const cookieParser = require('cookie-parser')





//body parser
app.use(cookieParser())
app.use(express.json());
app.use(cors({credentials:true,origin:"http://localhost:3000"} ));






//router
app.use('/api',router)


//deploye


if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'../frontend/bloodbank/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../frontend/bloodbank/build/index.html'))
})
}

//port
app.listen(5000,()=>{
    console.log("blood bank run 5000 port");
})



//database
mongoose.connect('mongodb+srv://babu:babu77,.@bloodbank.vadqhsx.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));