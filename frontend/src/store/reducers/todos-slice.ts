import { createSlice } from "@reduxjs/toolkit";
import { TodosType } from "types";


const initialState: TodosType[] = [];

const TodoSlice = createSlice({
    name: "todos",
    initialState: { value: initialState },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        getTodo: (state, action) => {
            state.value = action.payload
        },
        updateTodo: (state, action) => {
            state.value = state.value.filter((item: any) => {
                if (item._id === action.payload._id) {
                    Object.keys(action.payload).forEach(key => {
                        item[key] = action.payload[key]
                    })
                }
                return item;
            })
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter(
                (item) => item._id !== action.payload._id
            );
        },
    },
});

export const { addTodo, getTodo, updateTodo, deleteTodo } =
    TodoSlice.actions;

export default TodoSlice.reducer;
