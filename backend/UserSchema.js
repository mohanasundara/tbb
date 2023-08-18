 const mongoose = require("mongoose");



 
 const LogSchema = mongoose.Schema({

    Name:{
        type:String
    },
    Age:{
        type:String
    },
    BloodGroup:{
        type:String
    },
    Distic:{
        type:String
    },
    BloodDate:{
        type:String
    },
   
    PhoneNumber:{
        type:String
    },
    Email:{
        type:String
    },
    CreatePassword:{
        type:String
    },
    
 })
  

 module.exports = mongoose.model("Blooddonors",LogSchema);