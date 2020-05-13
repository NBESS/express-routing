const express = require('express');

const PORT = 8000;
const app = express();


app.get('/', (req, res, next)=>res.send('Hello World!'));
app.get('/cats', (req, res, next)=>res.send('Meow'));
app.get('/dogs', (req, res, next)=>res.send('Woof'));
app.get('/cats_and_dogs', (req, res, next)=>res.send('Living together'));

app.get('/greet/:greet', (req, res, next)=> {
    res.send(`Hello, ${req.params.greet}!`);
});

app.get('/year', (req, res)=>{
    console.log(req.query);
    let age = req.query.age;

    res.send(`You were born in ${2020 - Number(age)}.`);
})

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));