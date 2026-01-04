require("dotenv").config()
const express=require("express")
const cors=require("cors")
const corsoptions=require("./conpig/corsoptions")
const app=express()
const connectDB=require("./conpig/dbconn")
const { default: mongoose } = require("mongoose")
connectDB()
const PORT =process.env.PORT|| 7500

app.use(express.json())
app.use(cors(corsoptions))
app.use(express.static("public"))

app.use("/ContentManager/users",require("./routes/userRoute"))
app.use("/ContentManager/posts",require("./routes/postRoute"))
app.use("/ContentManager/photos",require("./routes/phtoRoute"))
app.use("/ContentManager/todos",require("./routes/todoRoute"))

mongoose.connection.once('open',err=>{
    console.log("connected to db")
    app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
    })
})
mongoose.connection.on('error',err=>{
    console.log(err)
})