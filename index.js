const express = require('express');
const cookieParser = require('cookie-parser');
const parser = require('body-parser').urlencoded({ extended: false });
const { verify, sign } = require('./jwt');

const app = express();
app.use(cookieParser());
app.listen(3000, () => console.log('Server started'));

app.get('/vaorap', (req, res) => {
    const token = req.cookies.token1;
    verify(token)
    .then(() => res.send('Welcome'))
    .catch(() => res.send('Ban phai mua ve'));
});

app.get('/muave', (req, res) => {
    sign({ daMuaVe: true })
    .then(token => {
        res.cookie('token1', token);
        res.send('Ban da mua ve');
    });
});

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const arrUser = [
    new User('khoapham', '123'),
    new User('vanpho93', '321'),
    new User('training', 'password')
];

app.get('/public', (req, res) => res.send('public page'));

app.get('/private', (req, res) => {
    const token = req.cookies.token;
    verify(token)
    .then(decoded => res.send('This is Private page ' + decoded.username))
    .catch(() => res.redirect('/public'));
});

app.get('/login', (req, res) => {
    const html = `
        <form action="/login" method="POST" >
            <input type="text" name="username" placeholder="Enter your username" />
            <br /><br />
            <input type="password" name="password" placeholder="Enter your password" />
            <br /><br />
            <button>Login</button>
        </form>
    `;
    res.send(html);
});

app.post('/login', parser, async (req, res) => {
    const { username, password } = req.body;
    const isValid = arrUser.some(user => (
        user.username === username && user.password === password
    ));
    if (!isValid) return res.send('Kiem tra lai thong tin dang nhap');
    const token = await sign({ username });
    res.cookie('token', token);
    res.redirect('/private');
});


//User, username, password -> create 3 user

//dang nhap
//send username, password. -> Check it 
//token: {usename: 'khoapham'}

//public
//private
//dangnhap

// {daMuaVe: true}
