const http = require('http');
const fs = require('fs');

const port = 1245;
const host = '127.0.0.1';

const countStudents = (filename) => {
  const students = {};
  let studentsCount = -1;

  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        for (const line of lines) {
          studentsCount += 1;
          const fields = line.split(',');
          if (students[fields[3]]) {
            students[fields[3]].push(fields[0]);
          } else {
            students[fields[3]] = [fields[0]];
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

});

module.exports = app;
