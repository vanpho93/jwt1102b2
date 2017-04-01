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

jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imtob2FwaGFtIiwiaWF0IjoxNDkxMDMwODEyLCJleHAiOjE0OTEwMzMwMDB9.0Ie_Pd0Q-pQrFr2NVO2RGfL7lsTZIihndmQZcwR_ufU', SECRET_KEY, (err, decoded) => {
    if (err) return console.log(err);
    console.log(decoded);
});

/*
    input: object
    return promise
 */
