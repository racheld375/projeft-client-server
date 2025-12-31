const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    phone:{
        type:String,
    }
},{
    timestamps: true
})

module.exports=mongoose.model('User',userschema)