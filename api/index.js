const express = require ("express")
const cors = require ("cors")
// import cors from 'cors'
// import mongoose from 'mongoose'
const speechRouter =require('./routes/speech.js')
// import speechRouter from './routes/speech.js'
const dotenv = require('dotenv')
// import dotenv from 'dotenv'


const app = express()
dotenv.config()

app.use(express())

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})
app.use("/speech", speechRouter)

app.listen(5000,()=>{
    console.log("server is running!")
})