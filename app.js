const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));