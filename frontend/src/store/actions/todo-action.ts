import axios from "axios";
import { AnyAction } from "redux-saga";
import { ThunkAction } from "redux-thunk";
import { showMessage } from "store/reducers/snack-slice";
import { addTodo, deleteTodo, getTodo, updateTodo } from "store/reducers/todos-slice";
import { RootState } from "store/store";
import { FormType, TodosType } from "types";
import { handleError } from "./handleError";
import { closeLoading, openLoading } from "store/reducers/loading-slice";
import { closeBtnLoading, openBtnLoading } from "store/reducers/btnLoading-slice";
import { closeDialog } from "store/reducers/dialog-slice";

export const  fetchTodoAction = (): ThunkAction<void, RootState, unknown, AnyAction> => dispatch => {
  dispatch(openLoading());
  axios.get("/tasks")
    .then(res => {
      dispatch(getTodo(res.data));
      dispatch(closeLoading())
    })
    .catch(err => handleError(dispatch, err))
}

export const addTodoAction = (data: FormType): ThunkAction<void, RootState, unknown, AnyAction> => dispatch => {
  dispatch(openBtnLoading())
  axios.post("/tasks", data)
    .then(res => {
      dispatch(showMessage({ message: "A new task was added successfully!" }))
      dispatch(addTodo(res.data));
      dispatch(closeBtnLoading())
    })
    .catch(err => handleError(dispatch, err))
}

export const updateTodoAction = (data: TodosType): ThunkAction<void, RootState, unknown, AnyAction> => dispatch => {
  dispatch(openBtnLoading())
  axios.put(`/tasks/${data._id}`, data)
    .then(res => {
      dispatch(showMessage({ message: "The task was updated successfully!" }));
      dispatch(updateTodo(res.data))
      dispatch(closeBtnLoading())
      dispatch(closeDialog())
    })
    .catch(err => handleError(dispatch, err))
}

export const deleteTodoAction = (_id: string): ThunkAction<void, RootState, unknown, AnyAction> => dispatch => {
  dispatch(openBtnLoading())
  axios.delete(`/tasks/${_id}`)
    .then(res => {
      dispatch(showMessage({ message: "The task was deleted successfully!" }));
      dispatch(deleteTodo({ _id }));
      dispatch(closeBtnLoading())
    })
    .catch(err => handleError(dispatch, err))
}
