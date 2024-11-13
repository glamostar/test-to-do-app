import TodoItem from 'views/Todo/TodoItem';
import React, { useEffect } from 'react';
import { fetchTodoAction } from 'store/actions/todo-action';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Typography } from '@mui/material';


const Todo: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos.value);

  useEffect(() => {
    dispatch(fetchTodoAction())
  }, [dispatch])

  return (
    <div className='flex w-100 pt-8'>
      <div className='w-1/2 px-8'>
        <Typography variant="h4" align='center'>Uncompleted</Typography>
        {
          todos.filter(todo => todo.completed === false).map(todo => (
            <div key={todo._id} className='py-3 px-20'>
              <TodoItem {...todo} />
            </div>
          ))
        }
      </div>
      <div className='w-1/2 px-8'>
        <Typography variant="h4" align='center'>Completed</Typography>
        {
          todos.filter(todo => todo.completed === true).map(todo => (
            <div key={todo._id} className='py-3 px-20'>
              <TodoItem {...todo} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Todo;