import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then((data)=>{
    console.log("Database is connected successfully")
}).catch(err=>console.log(err))

const app = express()

app.listen(3000,()=>{
    console.log("App is listening on the port 3000")
})