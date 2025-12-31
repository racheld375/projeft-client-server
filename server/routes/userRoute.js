const express=require("express")
const router=express.Router()

const userControler=require("../controller/userscontroler")

router.post("/",userControler.createNewUser)
router.get("/",userControler.getaUserrs)
router.delete("/",userControler.deleteUser)
router.put("/",userControler.updateUser)

module.exports=router