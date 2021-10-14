const express = require('express');
const mysql = require('mysql2');
const table = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: '123coding456!',
        database: 'employees_db'
      },
      console.log(`Connected to the employees_db database.`)
);

app.post('/api/new-department', ({ body }, res) => {
    const sql = `INSERT INTO department (department_name)
        VALUES (?)`;
    const params = [body.department_name];

    db.query(sql, params, (err, res) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

app.post('/api/new-role', ({ body }, res) => {
    const sql = `INSERT INTO employee_role (title)
        VALUES (?)`;
    const params = [body.title];

    db.query(sql, params, (err, res) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

app.post('/api/new-employee', ({ body }, res) => {
    const sql = `INSERT INTO employee (first_name)
        VALUES (?)`;
    const params = [body.employee];

    db.query(sql, params, (err, res) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// app.get('/api/employees', (req, res) => {
//     const sql = `SELECT id, department_name AS department FROM department`;
  
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });