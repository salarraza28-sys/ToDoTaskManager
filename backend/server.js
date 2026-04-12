import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.route.js";
import {connectDB} from "./config/db.js";

const app =express();
dotenv.config()
app.get("/",(req,res)=>{
    res.send("Server is ready")
})
app.use(express.json())
app.use("/api/todos/:id", todoRoutes);

app.listen(3000, () => {
    connectDB();
    console.log("Server started at http://localhost:3000");
});  