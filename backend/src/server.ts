import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import todoRoutes from './routes/todoRoute';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI! as string)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// use Route
app.use('/tasks', todoRoutes);


// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Catchall handler for any request that doesn't match above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});