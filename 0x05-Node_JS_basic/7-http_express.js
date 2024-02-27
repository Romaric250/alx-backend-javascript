const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = (filename) => {
  const students = {};
  let studentsCount = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        // Skip the first line (header line)
        for (let i = 1; i < lines.length; i += 1) {
          const fields = lines[i].split(',').map((field) => field.trim());
          // Check that the department field is not empty
          if (fields[3]) {
            studentsCount += 1;
            if (students[fields[3]]) {
              students[fields[3]].push(fields[0]);
            } else {
              students[fields[3]] = [fields[0]];
            }
          }
        }
        let output = `Number of students: ${studentsCount}\n`;
        for (const [key, value] of Object.entries(students)) {
          if (key) {
            output += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((data) => {
      res.send(['This is the list of our students', data].join('\n'));
    }).catch((error) => {
      res.send(error.message);
    });
});

app.listen(port, () => {
  console.log('server running at http://');
});

module.exports = app;
