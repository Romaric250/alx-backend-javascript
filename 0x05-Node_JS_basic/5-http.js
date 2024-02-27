const http = require('http');
const fs = require('fs');

const port = 1245;
const host = '127.0.0.1';

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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
