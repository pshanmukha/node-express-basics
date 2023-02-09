const EventEmitter = require('events');

//instance created
const customEmitter = new EventEmitter()

 //on - listen for an event
 //emit - emit an event

 // `response` is the name of the event
 //once the customEmitter listen the event then callback 
 //function will be called
 customEmitter.on("response", (name, id) => {
    console.log(`data received : ${name} ${id}`)
 })

 //we can have multiple listeners
 customEmitter.on("response", () => {
    console.log("some other logic here")
 })

 //emitting the event
 //we can also pass arguments when we're omitting the event
 customEmitter.emit("response","john",24)