const mongoose=require("mongoose")
const UserDetails=new mongoose.Schema(
    {
  username:String,
   email:String,   
   password:String,   
    },
    {
        collection:"userInfo",
    }
)
mongoose.model("userInfo",UserDetails)