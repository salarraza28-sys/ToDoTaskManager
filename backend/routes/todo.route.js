import express from 'express';
import Todo from '../models/todo.model.js';
const router = express.Router();
// Get all todos
router.get("/", async(req,res)=>{
    try{
        const todos = await Todo.find();
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

