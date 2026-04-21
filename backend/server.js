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
    const query = `
      SELECT 
        i.id, 
        i.name AS "internName", 
        i.role, 
        i.start_date AS "startDate", 
        i.end_date AS "endDate", 
        i.supervisor,
        COALESCE(json_agg(t.description) FILTER (WHERE t.description IS NOT NULL), '[]') AS "tasksCompleted"
      FROM interns i
      LEFT JOIN tasks t ON i.id = t.intern_id
      WHERE i.id = $1
      GROUP BY i.id;
    `;

    const result = await pool.query(query, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Intern record not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
