const express = require('express')
const router = express.Router()
let { people } = require("../data");


//remove base url "/api/people" 
//beacuse we already mentioned base url in app.js
//replace base url with forward slash "/"
router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: people });
  });
  
  router.post("/", (req, res) => {
    const {name} = req.body
    if(!name) {
      return res.status(400).json({success: false, msg: 'Please provide name value'})
    }
    return res.status(200).send({success:true, person:name})
  })
  
  //end point can be same until api method is different
  router.put("/:id", (req, res) => {
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
  router.delete("/:id", (req, res) => {
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

  module.exports = router