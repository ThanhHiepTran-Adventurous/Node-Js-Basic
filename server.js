const express = require('express');
const app = express();
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send(`I'm Thanh Hiệp`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})