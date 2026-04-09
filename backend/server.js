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
  connectionString: process.env.DATABASE_URL, // Use the single URL Render gives you
  ssl: {
    rejectUnauthorized: false, // Required for Render/Heroku/AWS connections
  },
});

// API Endpoint to fetch intern details by ID
app.get('/api/interns/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // 1. Fetch intern with column aliasing to match your React component
    const internResult = await pool.query(
      'SELECT id, name AS "internName", role, start_date AS "startDate", end_date AS "endDate" FROM interns WHERE id = $1', 
      [id]
    );
    
    if (internResult.rows.length === 0) {
      return res.status(404).json({ error: 'Intern record not found' });
    }

    const intern = internResult.rows[0];

    // 2. Fetch only the task strings
    const tasksResult = await pool.query('SELECT description FROM tasks WHERE intern_id = $1', [id]);
    
    // 3. Map the array so it's just strings: ["Task 1", "Task 2"] 
    // This matches your .map() function in the frontend
    const responseData = {
      ...intern,
      tasksCompleted: tasksResult.rows.map(t => t.task_description)
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
