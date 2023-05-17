const express = require('express');
const cors = require('cors')
const app = express();

app.options('*', cors())

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});
app.listen(3000, () => {
    console.log('Application listening on port 3333!');
});