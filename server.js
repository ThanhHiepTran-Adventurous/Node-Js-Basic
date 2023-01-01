//const express = require('express');
import express from 'express';
const path = require('path');
const app = express();
const port = 3001

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/about', (req, res) => {
    res.send(`I'm Thanh Hiệp`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})