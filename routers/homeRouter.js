const express = require("express");
const homeSchema = require("../models/homeSchema");
const Router = express.Router();
Router.get('/',(err,res)=>{
    res.render("index")
})

Router.get('/register',(err,res)=>{
    res.render("register")
})
Router.get('/data',(err,res)=>{
    res.render("data")
})


Router.post('/register',async (req,res)=>{
     try{
          const{
              name,
              number,
              email,
              password,
              cpassword

          }= req.body;
    
        if( password === cpassword & password.length>3 & number.length===10 ){
           
            console.log(name)
            const  userData = new homeSchema({
                name,
              number,
              email,
              password
            })
            console.log(name)
            userData.save(err=>{
                if(err){
                    res.render("register")
                }
                if(password.length<4){
                    res.render("register")
                }
                if(number.length!=10){
                    res.render("register")
                }
                
                else{
                    res.render('check')
                }

            })

        }
       
        else{
            res.render("register")
           
        }
     } catch(error){
        res.render("register")
     }
})


Router.post('/login',(req,res)=>{
    const{
        email,
        password
    }= req.body;
    if(email == "alokpandey123@gmail.com" && password == "1111"){
        res.render('data')
    }else{
        homeSchema.findOne({email:email},(err,result)=>{
            if(email == result.email && password == result.password){
                res.render('check')
            }
            else{
                console.log(err)
            }
        })
    }
    
})
module.exports = Router;