const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/data', (req, res) => {
  const results = [];
  fs.createReadStream('./hospital_db.csv')
    .pipe(csv())
    .on('data', (data) => {
      console.log(data); // Console.log each row of data from the CSV file
      results.push(data);
    })
    .on('end', () => {
      res.json(results);
    })
    .on('error', (error) => {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

const port = 3001; // Choose a port number for your backend server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
