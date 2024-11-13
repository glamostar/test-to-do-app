import { Button, DialogActions, DialogTitle } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { closeConfirm } from 'store/reducers/confirm-slice';
import { closeDialog, openDialog } from 'store/reducers/dialog-slice';

const ConfirmDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { visible, options } = useAppSelector(state => state.confirm.value)

  const handleOk = () => {
    options.onOk();
    handleClose();
  }

  const handleClose = () => {
    dispatch(closeConfirm())
    dispatch(closeDialog())
  }

  useEffect(() => {
    if (visible) {
      dispatch(openDialog({
        children: (
          <>
            <DialogTitle>{options.title}</DialogTitle>
            <DialogActions>
              <Button color="primary" onClick={handleOk}>Ok</Button>
              <Button color="primary" onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </>
        )
      }))
    }
  }, [visible, dispatch, options.title])

  return (
    <></>
  )
}
export default ConfirmDialog;