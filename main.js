const express = require('express')
const config = require('config')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

const port = process.env.PORT || config.get('port')

app.listen(port, () => console.log('Server is running ${port}'))