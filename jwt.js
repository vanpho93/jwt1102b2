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

<<<<<<< HEAD
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
=======
jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imtob2FwaGFtIiwiaWF0IjoxNDkxMDMwODEyLCJleHAiOjE0OTEwMzMwMDB9.0Ie_Pd0Q-pQrFr2NVO2RGfL7lsTZIihndmQZcwR_ufU', SECRET_KEY, (err, decoded) => {
    if (err) return console.log(err);
    console.log(decoded);
});
>>>>>>> 87fcb06692dab453a330888c3d61ac2eed75973a

/*
    input: object
    return promise
 */
