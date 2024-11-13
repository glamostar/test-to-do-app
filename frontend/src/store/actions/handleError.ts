import { closeBtnLoading } from "store/reducers/btnLoading-slice";
import { closeLoading } from "store/reducers/loading-slice";
import { showMessage } from "store/reducers/snack-slice"

export const handleError = (dispatch: any, error: any) => {
  dispatch(showMessage({ message: error.response.data, variant: "error" }));
  dispatch(closeLoading());
  dispatch(closeBtnLoading());
}