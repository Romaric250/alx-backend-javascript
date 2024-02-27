const http = require("http")
const readFile = require("fs")
const port = 1245
const host = '127.0.0.1'

const countStudents = (filename) => {
  const students = {};
  const rows = {};
  let studentsCount = -1;

  return new Promise((resolve, reject) => {
    readFile.readFile(filename, 'utf-8', (error, data) => {
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
          if (rows[fields[3]]) {
            rows[fields[3]].push(line);
          } else {
            rows[fields[3]] = [line];
          }
        }
      }
      console.log(`Number of students: ${studentsCount}`);
      for (const [key, value] of Object.entries(students)) {
        if (key) {
          console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
      }
      resolve(data);
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
   
      countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
  }
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})

module.exports = app