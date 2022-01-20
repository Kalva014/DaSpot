// Dependencies
const express = require("express");
const database = require("./database/connect_db");
var dotenv = require("dotenv");
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({path: "./process.env"});
port = process.env.PORT;

// Routes
const profilesRouter = require("./routes/profiles");
app.use('/profile', profilesRouter);

app.get('/', (req, res) => {
    res.send("testing to see if front end received anything");
});

app.listen(port, ()=>{
    console.log(`Server started and is listening on ${port}`);
});