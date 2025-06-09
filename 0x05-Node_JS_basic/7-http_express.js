const express = require('express');
const fs = require('fs');

// Import the async function for reading students
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');

      const students = lines.slice(1).filter(line => line.trim() !== '').map(line => {
        const student = line.split(',');
        return {
          firstname: student[0],
          field: student[3],
        };
      });

      const grouped = {};
      for (const student of students) {
        if (!grouped[student.field]) {
          grouped[student.field] = [];
        }
        grouped[student.field].push(student.firstname);
      }

      let output = `Number of students: ${students.length}`;
      for (const field in grouped) {
        output += `\nNumber of students in ${field}: ${grouped[field].length}. List: ${grouped[field].join(', ')}`;
      }

      resolve(output);
    });
  });
}

const app = express();
const port = 1245;
const database = process.argv[2]; // Get the path from CLI argument

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  try {
    const result = await countStudents(database);
    res.set('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port);
module.exports = app;
