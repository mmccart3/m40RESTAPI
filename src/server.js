require("./db/connection"); //first thing is to run db connection
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/userRoutes");
const app = express();
const serverPort = 5001;
const port = process.env.PORT || serverPort;


//add relevant routes and controllers to app before listen runs
app.use(cors());
app.use(express.json()); //This tells the server it will always send and receive JSON
app.use(userRouter);

app.listen(port, ()=> {
    console.log("listening on port ", port)
})