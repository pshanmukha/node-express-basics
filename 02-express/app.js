const express = require("express");
const app = express();
const people = require('./routes/people')
const auth = require('./routes/auth')

//create express static middleware
//static assets
app.use(express.static("./methods-public"));

//create urlencoded middleware
//It parses incoming requests with urlencoded payloads
//and is based on body-parser.
//allows to choose between parsing the URL-encoded data
//with the querystring library (when false)
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

//to use routers
//dont forgot to keep "/" infront of base url
app.use('/api/people', people)

app.use('/login', auth)

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
