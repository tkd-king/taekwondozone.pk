import dotenv from "dotenv"
import connectDb from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path:"./env"
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running at port : http://localhost:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongoDb error in src/index",error);
})