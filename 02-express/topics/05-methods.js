const express = require("express");
const app = express();
let { people } = require("./data");

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

app.get("/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send("Please Provide Credentials");
  }
  res.status(200).send(`Welcome ${name}`);
});

//end point can be same until api method is different
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person with ID ${id} found` });
  }
  console.log(people);
  console.log(req.body);
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  console.log(newPeople);
  res.status(200).json({ success: true, data: newPeople });
});

//end point can be same until api method is different
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person with ID ${id} found` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
