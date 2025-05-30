const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all todos
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM todos');
  res.json(rows);
});

// Create a todo
router.post('/', async (req, res) => {
  const { content } = req.body;
  const [result] = await db.query('INSERT INTO todos (content) VALUES (?)', [content]);
  res.json({ id: result.insertId });
});

// Update completion
router.put('/:id', async (req, res) => {
  const { completed } = req.body;
  await db.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, req.params.id]);
  res.sendStatus(200);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM todos WHERE id = ?', [req.params.id]);
  res.sendStatus(200);
});

module.exports = router;
