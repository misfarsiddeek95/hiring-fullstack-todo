import { useEffect, useState } from 'react';
import {
  Box,
  Checkbox,
  Container,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { Todo } from '../types/type';
import apiClient from './lib/api';
import { Delete, Edit, Add } from '@mui/icons-material';
import TodoModal from '../components/TodoModal';

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  const openCreateModal = () => {
    setEditTodo(null);
    setIsModalOpen(true);
  };

  const openEditModal = (todo: Todo) => {
    setEditTodo(todo);
    setIsModalOpen(true);
  };

  // get all todos
  const getTodos = async () => {
    try {
      const resp = await apiClient.get<Todo[]>('/todos');
      setTodos(resp.data);
    } catch (error) {
      console.error('Failed to fetch');
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // save or update todo
  const handleSave = async (data: { title: string; description?: string }) => {
    try {
      if (editTodo) {
        // Update existing todo
        await apiClient.put(`/todos/${editTodo.id}`, data);
      } else {
        // Create new todo
        await apiClient.post('/todos', data);
      }
      getTodos();
      setEditTodo(null);
    } catch (error) {
      console.error('Failed to save');
    }
  };

  // delete todo
  const handleDelete = async (id: number) => {
    try {
      await apiClient.delete(`/todos/${id}`);
      getTodos();
    } catch (error) {
      console.error('Failed to delete');
    }
  };

  // handle completed
  const handleComplete = async (id: number) => {
    try {
      await apiClient.patch(`/todos/${id}/done`);
      getTodos();
    } catch (error) {
      console.error('Failed to complete');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Tasks List
      </Typography>

      <Paper elevation={3} sx={{ p: 2 }}>
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <Box>
                  <IconButton
                    onClick={() => openEditModal(todo)}
                    color="primary"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(todo.id)}
                    color="error"
                  >
                    <Delete />
                  </IconButton>
                </Box>
              }
            >
              <Checkbox
                id={`checkbox-${todo.id}`}
                checked={todo.completed}
                onChange={() => handleComplete(todo.id)}
              />
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed ? 'text.secondary' : 'text.primary',
                    }}
                  >
                    {todo.title}
                  </Typography>
                }
                secondary={todo.description}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        onClick={openCreateModal}
      >
        <Add />
      </Fab>

      <TodoModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSave}
        initialData={editTodo}
      />
    </Container>
  );
}

export default App;
