const express = require('express');
const profilesRouter = express.Router();
const client = require("../database/connect_db")   

// This is for getting the list of profiles available
profilesRouter.get("/get-profile", (req, res) => {
    res.send("testing to see if can get profiles");
});

// This is for adding profiles
profilesRouter.post("/add-profile", async (req, res) => {
    // inserting one document(which is a row in a table for mongodb)
    try {
        await client.db("Database").collection("Profiles").insertOne({
            Username: "FirstUser",
            Password: "Testing",
        });
    }
    catch(err) {
        console.error(err);
    }
});

module.exports = profilesRouter;