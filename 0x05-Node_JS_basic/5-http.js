const http = require('http');
const fs = require('fs');

// Get the CSV file path from command-line argument
const databaseFile = process.argv[2];

// Function to count students asynchronously
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const header = lines.shift(); // remove header
      const fields = {};

      for (const line of lines) {
        if (line.trim() === '') continue;
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[parts.length - 1];

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      const totalStudents = Object.values(fields)
        .reduce((acc, curr) => acc + curr.length, 0);

      let summary = `Number of students: ${totalStudents}`;
      for (const [field, names] of Object.entries(fields)) {
        summary += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(summary);
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    countStudents(databaseFile)
      .then((summary) => {
        res.end(summary);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
