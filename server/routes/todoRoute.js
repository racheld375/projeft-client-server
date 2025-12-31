const express=require("express")
const router=express.Router()

const todoControler=require("../controller/todoscontroler")

router.post("/",todoControler.createNewTodo)
router.get("/",todoControler.getTodos)
router.delete("/",todoControler.deleteTodo)
router.put("/",todoControler.updateTodo)

module.exports=router