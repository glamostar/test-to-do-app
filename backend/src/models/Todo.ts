import mongoose, { Document, Schema } from 'mongoose';

interface Todo extends Document {
    name: string;
    description: string;
    completed: boolean;
}

const todoSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

export default mongoose.model<Todo>('Todo', todoSchema);