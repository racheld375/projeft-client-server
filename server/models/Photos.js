const mongoose=require("mongoose")

const phtoschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    } 
},{
    timestamps: true
})

module.exports=mongoose.model('Photo',phtoschema)