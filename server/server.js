const express = require("express");
const database = require("./database/connect_db");
const profilesRoute = require("./routes/profiles");
var dotenv = require("dotenv");
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/profiles', profilesRoute);

dotenv.config({path: "./process.env"});
port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("testing to see if front end received anything");
});

app.listen(port, ()=>{
    console.log(`Server started and is listening on ${port}`);
});