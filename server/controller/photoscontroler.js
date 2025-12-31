
const Photo=require("../models/Photos")

const createNewPhoto=async(req,res) => {
    const{title,imageUrl}=req.body
    if(!title)
        return res.status(400).send("title is requierd")
    const photo=await Photo.create({title,imageUrl})
    if (photo)
        return res.status(200).json(photo)
    else
        return res.status(400).send("error")

}

const getPhotos=async (req,res)=>{
    const photo=await Photo.find().lean()
    if(!photo)
        return res.status(400).send("not found")
    res.json(photo)
}


const updatePhoto=async (req,res)=>{
    const{id,title,imageUrl}=req.body
    if(!id||!title)
        return res.send("id and title are required")
    const photo=await Photo.findById(id)
    if(!photo)
        return res.status(400).send("not foubd")
    photo.title=title
    photo.imageUrl=imageUrl
    const upp=await photo.save()
    res.json(upp)
}

const deletePhoto=async(req,res)=>{
    const {id}=req.body
    const photo=await Photo.findById(id)
    if(!photo)
        return res.status(400).send("not foubd")
    const resukt=await photo.deleteOne()
    const reply=`photo'${resukt.name}'id ${resukt._id} deleted`
    res.json(reply)
}

module.exports={createNewPhoto,getPhotos,updatePhoto,deletePhoto}
