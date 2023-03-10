const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const bodyParser = require('body-parser');
const doRequest = require('./doRequest');

const app = express()
// Require the Aylien npm package
var aylien = require("aylien_textapi");

app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));
// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/article', doRequest.getArticle);

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

module.exports = app;