/**cors server hosted on heroku */
import fetch from "node-fetch";
import express from 'express';
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    .then(res => res.json())
    .then(body => res.send(body));
});

app.post('/', (req, res) => {
    res.send('POST request');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));