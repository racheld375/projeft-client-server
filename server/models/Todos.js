const mongoose=require("mongoose")

const todoschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    tags:[String]  
},{
    timestamps: true
})

module.exports=mongoose.model('Todo',todoschema)