const Todo=require("../models/Todos")

const createNewTodo=async(req,res) => {
    const{title,tags,completed}=req.body
    if(!title)
        return res.status(400).send("title is requierd")
    const todo=await Todo.create({title,tags,completed})
    if (todo)
        return res.status(200).json(todo)
    else
        return res.status(400).send("error")

}

const getTodos=async (req,res)=>{
    const todo=await Todo.find().lean()
    if(!todo)
        return res.status(400).send("not found")
    res.json(todo)
}


const updateTodo=async (req,res)=>{
    const{id,title,tags,completed}=req.body
    if(!id||!title)
        return res.send("id and title are required")
    const todo=await Todo.findById(id)
    if(!todo)
        return res.status(400).send("not foubd")
    todo.title=title
    todo.tags=tags
    todo.completed=completed
    const upp=await todo.save()
    res.json(upp)
}

const deleteTodo=async(req,res)=>{
    const {id}=req.body
    const todo=await Todo.findById(id)
    if(!todo)
        return res.status(400).send("not foubd")
    const resukt=await todo.deleteOne()
    const reply=`todo'${resukt.name}'id ${resukt._id} deleted`
    res.json(reply)
}

module.exports={createNewTodo,getTodos,updateTodo,deleteTodo}
