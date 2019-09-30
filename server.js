const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const fruits = ['pear', 'mango', 'banana', 'kiwi'];
const meats = ['beef', 'chicken', 'fish'];

app.get('/market/fruits', (req, res) => {
  res.json(fruits);
});

app.get('/market/meats', (req, res) => {
  res.json(meats);
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'no such endpoint' });
});

app.listen(4000, () => {
  console.log('listening on 4000');
});
