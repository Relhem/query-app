const express = require('express');
const cors = require('cors')
const app = express();

app.options('*', cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});
app.listen(port, () => {
    console.log(`Application listening on port ${port}!`);
});