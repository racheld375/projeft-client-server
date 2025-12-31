const express=require("express")
const router=express.Router()

const photoControler=require("../controller/photoscontroler")

router.post("/",photoControler.createNewPhoto)
router.get("/",photoControler.getPhotos)
// router.get("/:id",taskcontroler.getbyid)
router.delete("/",photoControler.deletePhoto)
// router.put("/:id",taskcontroler.updatecomplete)
router.put("/",photoControler.updatePhoto)

module.exports=router