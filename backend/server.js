const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
