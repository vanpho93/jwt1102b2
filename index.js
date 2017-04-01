const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server started'));

app.get('/vaorap', (req, res) => {
    res.send('Welcome');
});

app.get('/muave', (req, res) => {
    res.send('Ban da mua ve');
});
