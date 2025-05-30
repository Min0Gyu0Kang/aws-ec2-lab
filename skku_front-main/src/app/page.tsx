'use client';
import { useState, useEffect } from 'react';
import { Container, TextField, Button, List, Typography } from '@mui/material';
import { getTodos, addTodo } from '../utils/api';
import TodoItem from '../components/TodoItem';

type Todo = { id: number; content: string; completed: boolean };

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    if (content.trim()) {
      await addTodo(content);
      setContent('');
      setTodos(await getTodos());
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>To-Do List</Typography>
      <TextField fullWidth value={content} onChange={e => setContent(e.target.value)} placeholder="할 일 입력" />
      <Button fullWidth onClick={handleAdd} sx={{ mt: 2 }} variant="contained">추가</Button>
      <List>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </List>
    </Container>
  );
}
