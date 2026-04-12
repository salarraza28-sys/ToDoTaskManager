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
// Add a new todo
router.post("/",async (req, res) =>{
    const todo =new Todo({
        text: req.body.text
    })
    try{
        const newTodo = await todo.save();
        res.status(201).json(newTodo)
    } catch (error){
        res.status(400).json({message: error.message})
    }
} )

