const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'qwer1234',
  database: 'todo_db',
});
module.exports = pool.promise();
