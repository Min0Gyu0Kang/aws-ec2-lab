const express = require('express');
const cors = require('cors');
const db = require('./db');
const todoRoutes = require('./routes/todo');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

// Add database connection test
db.getConnection()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
