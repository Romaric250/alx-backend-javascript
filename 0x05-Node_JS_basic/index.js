const express = require('express');

MyApp = express();

const ports = 1245;

MyApp.get('/', (req, res) => {
  res.send('hello here');
});

MyApp.get('/test', (re, r_s) => {
  const message = 'hello here is a test';

  console.log(re);
  r_s.send(message);
});

MyApp.listen(ports, () => { });
