require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
var mongoose = require('mongoose');
const PORT = process.env.PORT | 3000

const route = require ('./route')

const bodyParser = require("body-parser");

var mongoDB = 'mongodb://127.0.0.1/Blog';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('debug', true)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())


app.get('/ping', (req, res) => {
	res.status(200).end('Application running!');
});


app.use('/',cors(), route)

app.use(cors())

app.listen(3000, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
);