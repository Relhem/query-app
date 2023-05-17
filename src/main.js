const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();

app.options('*', cors());

const port = process.env.PORT || 3000;

console.log(process.env.test);

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});
app.listen(port, () => {
    console.log(`Application listening on port ${port}!`);
});