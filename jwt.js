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

const verify = (token) => (
    new Promise((resovle, reject) => {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) return reject(err);
            resovle(decoded);
        });
    })
);

const main = async () => {
    const token = await sign({ name: 'Khoa Pham' });
    const decode = await verify(token);
    console.log(decode);
};

main();

/*
    input: object
    return promise
 */
