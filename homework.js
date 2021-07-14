const express = require('express')
const app = express();

app.get('/person', (req, res) => {
res.send({
    name: 'Eduard'
})
})
app.listen(4000);

app.get('/person/adress', (req, res) => {
    res.send({
      email: 'eduard@mail.ru'  
    })
});

app.get('/person/age', (req, res) => {
    res.send({
        age: '22'
    })
})