const express = require("express");
const res = require("express/lib/response");
const app=express();
const mongoose=require("mongoose")
app.use(express.json());
const cors=require("cors")
app.use(cors());

const mongoUrl="mongodb+srv://sanjay:2255@cluster0.w4gve4j.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,

}).then(()=>{console.log("connected to database");
}).catch((e)=>console.log(e));

require("./userDetails")

const User=mongoose.model("userInfo")

app.post("/register",async(req,res)=>{
    const {username,email,password}=req.body;
    try{
    await User.create({
        username,
        email,
        password,
    });
    res.send({status:"ok"})
    }catch(error){
        res.send({status:"error"})
    }
})



app.listen(5000,()=>{
    console.log("server started");
})



