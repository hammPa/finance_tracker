const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const pgp = require("pg-promise")();

const db = pgp({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cors());
app.use(express.json());

app.get('/expenses', async (req, res) => {
  const data = await db.any('SELECT * FROM expenses');
  res.json(data);
});

app.post('/expenses', async (req, res) => {
  const { item, category, amount, month } = req.body;
  const inserted = await db.one(
    'INSERT INTO expenses(item, category, amount, month) VALUES($1, $2, $3, $4) RETURNING *',
    [item, category, amount, month]
  );
  res.json(inserted);
});

app.put('/expenses/:id', async (req, res) => {
  const { id } = req.params;
  const { item, category, amount } = req.body;
  const updated = await db.one(
    'UPDATE expenses SET item=$1, category=$2, amount=$3 WHERE id=$4 RETURNING *',
    [item, category, amount, id]
  );
  res.json(updated);
});

app.delete('/expenses/:id', async (req, res) => {
  const { id } = req.params;
  await db.none('DELETE FROM expenses WHERE id=$1', [id]);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));