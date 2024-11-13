import { Avatar, Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { openDialog } from "store/reducers/dialog-slice";
import { TodosType } from "types";
import EditForm from "./EditForm";
import { deleteTodoAction, updateTodoAction } from "store/actions/todo-action";
import { openConfirm } from "store/reducers/confirm-slice";
import { Check, Close, EditCalendar } from "@mui/icons-material";
import { useAppDispatch } from "store/hooks";
import IconBtn from "components/IconBtn";

const TodoItem = (item: TodosType) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(openDialog({
      children: <EditForm
        role="Edit"
        _id={item._id}
        name={item.name}
        description={item.description}
      />
    }))
  }

  const handleStatus = () => {
    dispatch(openConfirm({
      title: "Are you sure to complete the task?",
      onOk: () => {
        dispatch(updateTodoAction({ _id: item._id, completed: true }))
      }
    }))
  }

  const handleDelete = () => {
    dispatch(openConfirm({
      title: "Are you sure to delete the task?",
      onOk: () => {
        dispatch(deleteTodoAction(item._id))
      }
    }))
  }

  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{bgcolor: "lightblue"}}>T</Avatar>}
        action={
          <>
            <IconBtn icon={<EditCalendar color="warning" />} onClick={handleEdit} />
            <IconBtn color="error" onClick={handleDelete} icon={<Close color="error" />} />
          </>
        }
        title={item.name}
      />
      <CardContent>{item.description}
      </CardContent>
      {
        !item.completed &&
        <CardActions className="flex justify-center">
          <Button color="success" variant="contained" onClick={handleStatus}>
            <Check />
          </Button>
        </CardActions>
      }
    </Card>
  )
}
export default TodoItem;