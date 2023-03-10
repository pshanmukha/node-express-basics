const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
var cors = require('cors')

const port = 3000;

//middleware
app.use(cors())
app.use(express.json());
app.use(express.static("./public")); //to serve public files

//routes
app.use("/api/v1/tasks", tasks); //frontend req -> app.use -> routes(tasks) ->controller(tasks) -> res

//this error handle middleware should be at very bottom of all middlewares
app.use(notFound) //to show error message when url is wrong
app.use(errorHandlerMiddleware) //our custom errorHandlerMiddleware
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
