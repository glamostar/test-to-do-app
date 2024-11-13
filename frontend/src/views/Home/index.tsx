import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const moveToList = () => {
    navigate("/todos")
  }

  return (
    <div className='text-center pt-40'>
      <Typography variant='h1'>Hello, World!</Typography>
      <Typography variant='h3' sx={{marginBottom: "50px"}}>This is a sample modulized Todo Application.</Typography>
      <Button variant="contained" color="primary" onClick={moveToList}>Todo List</Button>
    </div>
  )
}
export default Home;