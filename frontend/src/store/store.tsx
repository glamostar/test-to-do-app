import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./reducers/todos-slice";
import DialogReducer from "./reducers/dialog-slice";
import SnackReducer from "./reducers/snack-slice";
import LoadingReducer from "./reducers/loading-slice";
import BtnLoadingReducer from "./reducers/btnLoading-slice";
import ConfirmReducer from "./reducers/confirm-slice";

export const store = configureStore({
    reducer: {
        todos: TodoReducer,
        dialog: DialogReducer,
        confirm: ConfirmReducer,
        snack: SnackReducer,
        loading: LoadingReducer,
        btnLoading: BtnLoadingReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
