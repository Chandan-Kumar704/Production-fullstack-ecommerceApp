const express=require("express");
const Connect = require("./config/db");
const UserModel = require("./model/UserModel");
const app=express();
const cors= require('cors');
const dotenv = require('dotenv');
const router = require("./routers/UserRouter");
app.use(express.json());
app.use(cors());
const path = require('path')

//dotenv config
dotenv.config();

Connect();

app.use('/api',router);

app.use(express.static(path.join(__dirname, './client/build')));

app.use('*', function(req,res){

    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})









app.listen(5000,()=>{
    console.log("App running port on 5000")
})
