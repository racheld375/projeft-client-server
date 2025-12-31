const Post=require("../models/Posts")

const createNewPost=async(req,res) => {
    const{title,body}=req.body
    if(!title)
        return res.status(400).send("title is requierd")
    const post=await Post.create({title,body})
    if (post)
        return res.status(200).json(post)
    else
        return res.status(400).send("error")

}

const getPosts=async (req,res)=>{
    const post=await Post.find().lean()
    if(!post)
        return res.status(400).send("not found")
    res.json(post)
}


// const getbyid=async (req,res)=>{
//     const {id}=req.params
//     const takst=await Task.findById(id)
//     if(!takst)
//         return res.status(400).send("not foubd")
//     res.json(takst)
// }
const updatePost=async (req,res)=>{
    const{id,title,body}=req.body
    if(!id||!title)
        return res.send("id and title are required")
    const post=await Post.findById(id)
    if(!post)
        return res.status(400).send("not foubd")
    post.title=title
    post.body=body
    const upp=await post.save()
    res.json(upp)
}

const deletePost=async(req,res)=>{
    const {id}=req.body
    const post=await Post.findById(id)
    if(!post)
        return res.status(400).send("not foubd")
    const resukt=await post.deleteOne()
    const reply=`post'${resukt.name}'id ${resukt._id} deleted`
    res.json(reply)
}
// const updatecomplete=async(req,res)=>{
//  const{id}=req.params
//  const task=await Task.findById(id).exec()
//  if(!task)
//     return res.status(400).json({massag:"not found"})
//  task.complete=!task.complete
//  const updatetask=await task.save()
//  res.json(`'${updatetask.name}' updeted`)
// }
module.exports={createNewPost,getPosts,updatePost,deletePost}
