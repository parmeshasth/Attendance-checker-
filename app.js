require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");
const homeRouter = require('./routers/homeRouter');



const port = process.env.PORT || 8080;
const app = express();

app.set('view engine','ejs')



app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/index',(req,res)=>{
    res.render('index')
})
app.get('/data',(req,res)=>{
    res.render('data')
})
app.get('/check',(req,res)=>{
    res.render('check')
})





mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
const db = mongoose.connection;
 
db.on("error", ()=>{
    console.log("error in connection");
})
db.once('open',()=>{
    console.log("connection success");
})
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/',homeRouter);



app.listen(8080);