const express = require('express');
const app = express();
const port = 2000;
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use('/stocks/:ticker', express.static(__dirname)); // serves the index.html from the current directory

app.listen(port, ()=> {
  console.log(`Hello, I am listening on port ${port}`);
});

// app.get('/api/earnings', (req, res, next) => {
//   res.redirect('http://18.224.6.69/api/earnings');
// });

// app.get('/api/analystRatings', (req, res, next) => {
//   res.redirect('http://3.136.112.156/api/analystRatings');
// });

