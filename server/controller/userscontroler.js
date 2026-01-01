const User=require("../models/Users")

const createNewUser=async(req,res) => {
    const{name,username,email,address,phone}=req.body
    if(!name||!username)
        return res.status(400).send("name and username are requierd")
    const user=await User.create({name,username,email,address,phone})
    if (user)
        return res.status(200).json(user)
    else
        return res.status(400).send("error")

}

const getaUserrs=async (req,res)=>{
    const user=await User.find()
    if(!user)
        return res.status(400).send("not foubd")
    res.json(user)
}


const updateUser=async (req,res)=>{
    const{id,name,username,email,address,phone}=req.body
    if(!id||!name||!username)
        return res.send("id, name and username are required")
    const user=await User.findById(id)
    if(!user)
        return res.status(400).send("not foubd")
    user.name=name
    user.username=username
    user.email=email
    user.address=address
    user.phone=phone
    const upt=await user.save()
    res.json(upt)
}

const deleteUser=async(req,res)=>{
    const {id}=req.body
    const user=await User.findById(id)
    if(!user)
        return res.status(400).send("not foubd")
    const resukt=await user.deleteOne()
    const reply=`user'${resukt.name}'id ${resukt._id} deleted`
    res.json(reply)
}

module.exports={createNewUser,getaUserrs,updateUser,deleteUser}
