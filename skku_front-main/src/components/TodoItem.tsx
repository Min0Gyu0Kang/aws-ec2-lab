'use client';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateTodo, deleteTodo, getTodos } from '../utils/api';

type Todo = { id: number; content: string; completed: boolean };
type Props = { todo: Todo; setTodos: (todos: Todo[]) => void };

export default function TodoItem({ todo, setTodos }: Props) {
  const toggle = async () => {
    await updateTodo(todo.id, !todo.completed);
    setTodos(await getTodos());
  };
  const remove = async () => {
    await deleteTodo(todo.id);
    setTodos(await getTodos());
  };

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={toggle} />
      <ListItemText primary={todo.content} />
      <IconButton onClick={remove}><DeleteIcon /></IconButton>
    </ListItem>
  );
}
