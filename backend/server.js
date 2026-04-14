import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";

dotenv.config(); // ✅ Must be called FIRST before reading any process.env values

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cors()); // ✅ Enable CORS so frontend can communicate with backend

app.use("/api/todos", todoRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started at http://localhost:5001");
  });
});