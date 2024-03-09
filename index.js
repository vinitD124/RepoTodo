const express = require('express')
const app = express()

require("dotenv").config();

const port = process.env.PORT || 4000

app.use(express.json())


const todoRoutes = require('./routes/todos')
app.use("/api/v1", todoRoutes)



app.listen(port,()=>{
    console.log(`server strted at ${port}`)
})


const dbConnect = require('./config/database')
dbConnect()


app.get("/",(req,resp)=>{
    resp.send("<h1>This is home page</h1>")
})  