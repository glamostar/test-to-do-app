import { enqueueSnackbar, SnackbarProvider } from "notistack"
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { closeMessage } from "store/reducers/snack-slice";

const Notistack: React.FC = () => {
  const { visible, options } = useAppSelector(state => state.snack.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (visible) {
      enqueueSnackbar(options.message, { variant: options.variant })
      dispatch(closeMessage());
    }
  }, [visible, options.message, options.variant, dispatch])

  return (
    <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: "bottom" }} />
  )
}
export default Notistack;
