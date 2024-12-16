import dotenv from "dotenv"
import connectDb from "./src/db/index.js"
import { app } from "./src/app.js"
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({
    path:"./env"
})

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'out')));

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running at port : http://localhost:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongoDb error in src/index",error);
})