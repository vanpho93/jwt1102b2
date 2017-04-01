const jwt = require('jsonwebtoken');

const SECRET_KEY = 'df2h8de8wjsabdadf';



const sign = (obj) => (
    new Promise((resovle, reject) => {
        jwt.sign(obj, SECRET_KEY, { expiresIn: 5 }, (err, token) => {
            if (err) return reject(err);
            resovle(token);
        });
    })
);

sign({ name: 'khoapham' })
.then(token => console.log(token))
.catch(err => console.log(err));


/*
    input: object
    return promise
 */
