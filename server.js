const express = require('express');
const app = express();
const port = 2000;
const cors = require('cors');
const path = require('path');

app.use('/', express.static(path.join(__dirname)));
app.use(cors());

app.listen(port, ()=> {
  console.log(`Hello, I am listening on port ${port}`);
});


