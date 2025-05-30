const API_URL = 'http://localhost:4000/api/todos';

export const getTodos = async () => (await fetch(API_URL)).json();
export const addTodo = async (content: string) => {
  await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }) });
};
export const updateTodo = async (id: number, completed: boolean) => {
  await fetch(`${API_URL}/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ completed }) });
};
export const deleteTodo = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
