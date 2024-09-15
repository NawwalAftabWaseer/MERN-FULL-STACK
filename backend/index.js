import dotenv from "dotenv"
dotenv.config()
import express from "express"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"
import connectDB from "./config/database.js"


const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)

connectDB()
app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`)
})