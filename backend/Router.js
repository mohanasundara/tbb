const express = require("express");

const router = express.Router();
const Users =  require('./UserSchema');
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken")
 
 





router.post('/register',async(req,res)=>{

    const passwordbycrpt =await bcrypt.hash(req.body.CreatePassword,10)
    try {

        const alredymail =await Users.findOne({Email:req.body.Email})
        const userlogin = await Users({
            Name:req.body.Name,
            Age:req.body. Age,
            BloodGroup:req.body.BloodGroup,
            Distic:req.body.Distic,
            PhoneNumber:req.body. PhoneNumber,
            Email:req.body.Email,
           
        CreatePassword:passwordbycrpt,
        })

        if(alredymail){
           return res.json("mail alredy exist")
        }
  userlogin.save();
       
   
      
        res.json("success");
        
    } catch (error) {
        console.log("error");
    }

    
});

router.post('/login',async(req,res)=>{
    try {
        const userdata = await Users.findOne({Email:req.body.Email});
         if(!userdata){
          return res.status(400).json("Your email address is denied")
         }

         const validp = await bcrypt.compare(req.body.Password,userdata.CreatePassword);
         if(!validp){
            return res.status(400).json("Wrong password");
            
         }
         var usetoken = jwt.sign({Email:userdata.Email},'babu');
        res.cookie("auth",usetoken
        , {
            // origin:"http://localhost:3000",
           
            // httpOnly: true
            // secure: true,
            // sameSite: "none",
          }
          )
     res.header('auth',usetoken).json(usetoken);
 
     console.log(usetoken);



    }
     catch (error) {
        console.log("error backend");
        
    }
    
});


const validuser = (req,res,next) =>{
    var token = req.header('auth');
    req.token = token;
    next();
}
 
//getdata profile 


router.get('/getdata'  ,validuser,async(req,res)=>{

try {
    const ctoken = JSON.parse(req.token)
    // var cookie = getcookie('auth');
 
    jwt.verify(ctoken,'babu',async(err,data)=>{
        if(err){
        res.status(403).json(err);
        } 
    else        {
     const data = await Users.find();
     res.status(200).json(data);
    
    }
      }  )
    
} catch (error) {
    res.status(400).json("no token");
    
}

    
    })

 
    //get show all profile
    router.get("/recipient",async(req,res)=>{
        const getall = await Users.find() ;
         
        res.json(getall);
        console.log(getall);
    
    });



    ///UPDATAE
    router.put('/updatev',async(req,res)=>{

        try {
            const updatev = await Users.updateOne({Email:req.body.Email},{$set:
                {
                    Name:req.body.Name,
                    Age:req.body. Age,
                    BloodGroup:req.body.BloodGroup,
                    Distic:req.body.Distic,
                    PhoneNumber:req.body. PhoneNumber,
                     
                }});
                res.status(200).json(updatev);
            
        } catch (error) {
            res.json("bad")
            
        }
       
    })




    //delete
    router.delete('/delete/:id',async(req,res)=>{
        const del = await Users.findByIdAndRemove(req.params.id).then(e=>{
            res.json("delete")
        })
    })



module.exports = router;