import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"


dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN,// Allow any origin
    credentials: true, // Allow credentials if needed
}));

//import seccure routes
import uniformRouter from "../src/routes/uniform.route.js"
import userRouter from "../src/routes/user.route.js"
// import soldUniformsRouter from './routes/solduniform.route.js';

// Declare routes
app.use("/api/v1/uniforms", uniformRouter)
// app.use("/api/v1/sold-uniforms", soldUniformsRouter)
app.use("/api/v1/auth", userRouter )
app.get("/health", (req, res) => res.send("page is running"))

export {app}