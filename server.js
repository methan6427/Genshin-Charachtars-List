const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',  // Change this to your MySQL server if hosted online
    user: 'root',
    password: 'Adam@6427',
    database: 'genshin_db'
});

db.connect(err => {
    if (err) { console.error('Database connection failed: ' + err.stack); return; }
    console.log('Connected to MySQL database.');
});

// Fetch all characters
app.get('/api/characters', (req, res) => {
    db.query('SELECT * FROM characters', (err, results) => {
        if (err) { res.status(500).send(err); return; }
        res.json(results);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
