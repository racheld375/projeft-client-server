const mongoose=require("mongoose")

const postschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
    }
},{
    timestamps: true
})

module.exports=mongoose.model('Post',postschema)