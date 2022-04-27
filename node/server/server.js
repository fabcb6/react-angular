const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { json } = require('express');
const db = require('./database/connection');
const pizzas = require('./controllers/pizzas.controller')


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(json());

// Mongo
app.get('/pizzas', pizzas.getAll);
app.get('/pizzas/:id', pizzas.get);
app.post('/pizzas', pizzas.create);
app.put('/pizzas/:id', pizzas.update);
app.delete('/pizzas/:id', pizzas.delete);

db.connection();


app.listen(3001)