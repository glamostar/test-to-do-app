import { Dialog } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { closeDialog, DialogType } from 'store/reducers/dialog-slice';
import { RootState } from 'store/store';

const CustomDialog: React.FC = () => {
  const dispatch = useDispatch();
  const { visible, options } = useSelector<RootState, DialogType>(state => state.dialog.value)

  return (
    <Dialog open={visible} onClose={() => dispatch(closeDialog())} {...options} />
  )
}
export default CustomDialog;