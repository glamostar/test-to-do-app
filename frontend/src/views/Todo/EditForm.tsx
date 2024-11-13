import React, { useEffect } from 'react';
import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { FormType } from 'types';
import useForm from 'utils/useForm';
import { addTodoAction, updateTodoAction } from 'store/actions/todo-action';
import { Edit } from '@mui/icons-material';
import { useAppDispatch } from 'store/hooks';
import { showMessage } from 'store/reducers/snack-slice';
import CustomBtn from 'components/CustomBtn';

type PropTypes = {
  _id?: string;
  name?: string;
  description?: string;
  role: string;
}



const initialForm: FormType = {
  name: "",
  description: ""
}

const EditForm: React.FC<PropTypes> = props => {
  const { _id, name, description, role } = props;
  const dispatch = useAppDispatch();
  const { form, setForm, handleChange, clear } = useForm({ ...initialForm })

  useEffect(() => {
    if (_id) {
      setForm({
        name: name as string,
        description: description as string
      })

    }
  }, [_id])

  const handleClick = () => {
    if (form.name.length === 0 || form.description.length === 0) {
      return dispatch(showMessage({ message: "Type a valid data", variant: "error" }))
    }
    if (role === "Add") {
      dispatch(addTodoAction({ name: form.name as string, description: form.description as string }));
      clear();
    } else {
      dispatch(updateTodoAction({ _id: _id as string, ...form }))
    }
  }

  return (
    <>
      <DialogTitle>{role} a Task!</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          name="name"
          variant='outlined'
          label="Name"
          sx={{ margin: "10px 0" }}
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          name="description"
          variant='outlined'
          label="Description"
          sx={{ margin: "10px 0" }}
          value={form.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <CustomBtn variant='contained' color='primary' onClick={handleClick} icon={<Edit />} title={role} />
      </DialogActions>
    </>
  )
}
export default EditForm;