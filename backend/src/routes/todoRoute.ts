import express, { Request, Response } from 'express';
import Todo from '../models/Todo';

const router = express.Router();

// Get all todos
router.get('/', async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Create a new todo
router.post('/', async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const newTodo = new Todo({ name, description });
    try {
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
});

// Update a todo
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
});

// Delete a todo
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
});

export default router;
