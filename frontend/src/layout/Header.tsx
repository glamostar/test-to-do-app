import { Add, Home } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconBtn from 'components/IconBtn';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openDialog } from 'store/reducers/dialog-slice';
import EditForm from 'views/Todo/EditForm';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openAddModal = () => {
    dispatch(openDialog({
      children: (
        <EditForm role="Add" />
      )
    }))
  }

  const moveToHome = () => {
    navigate("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconBtn icon={<Home className='text-white' />} onClick={moveToHome} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <IconBtn icon={<Add className='text-white' />} onClick={openAddModal} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
