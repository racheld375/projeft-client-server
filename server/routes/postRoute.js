const express=require("express")
const router=express.Router()

const postControler=require("../controller/postscontroler")

router.post("/",postControler.createNewPost)
router.get("/",postControler.getPosts)
router.get("/top",postControler.getTopPosts)
router.delete("/",postControler.deletePost)
router.put("/",postControler.updatePost)

module.exports=router