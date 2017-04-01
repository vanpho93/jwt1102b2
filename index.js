const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.listen(3000, () => console.log('Server started'));

app.get('/getcookie', (req, res) => {
    res.send(req.cookies);
});

app.get('/setcookie', (req, res) => {
    res.cookie('name', 'Nguyen Van Pho');
    res.send('Set successfully!');
});

app.get('/vaorap', (req, res) => {
    res.send('Welcome');
});

app.get('/muave', (req, res) => {
    res.send('Ban da mua ve');
});
