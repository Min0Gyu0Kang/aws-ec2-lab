const express = require('express');
const cors = require('cors');
const db = require('./db');
const todoRoutes = require('./routes/todo');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
