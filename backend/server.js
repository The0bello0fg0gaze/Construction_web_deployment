const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection Pool
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'construction_db',
  password: process.env.DB_PASSWORD || 'your_password',
  port: process.env.DB_PORT || 5432,
});

// API Endpoint to fetch intern details by ID
app.get('/api/interns/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch intern details
    const internResult = await pool.query('SELECT * FROM interns WHERE id = $1', [id]);
    
    if (internResult.rows.length === 0) {
      return res.status(404).json({ error: 'Intern record not found' });
    }

    const intern = internResult.rows[0];

    // Fetch associated tasks
    const tasksResult = await pool.query('SELECT * FROM tasks WHERE intern_id = $1', [id]);
    
    // Combine the data
    const responseData = {
      ...intern,
      tasks: tasksResult.rows
    };

    res.json(responseData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
