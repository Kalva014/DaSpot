const express = require('express');
const profilesRouter = express.Router();
const client = require("../database/connect_db")   

// This getting the profile
profilesRouter.get("/get-profile/", async (req, res) => {
    try {
        const userData = await client.db("Database").collection("Profiles").findOne({Username: req.body.Username});
        res.json(userData);
    }
    catch(err) {
        console.error(err);
    }
});


// This is for adding profiles
profilesRouter.post("/add-profile/", async (req, res) => {
    try {
        await client.db("Database").collection("Profiles").insertOne({
            Username: req.body.Username,
            Password: req.body.Password
        });
        res.send(`${req.body.Username} has been created!`);
    }
    catch(err) {
        console.error(err);
    }
});


// This is for deleting profiles
profilesRouter.delete("/delete-profile/", async (req, res) => {
    try {
        let oldProfileName = req.body.Username;
        const userData = await client.db("Database").collection("Profiles").deleteOne({Username: req.body.Username});
        res.send(`${oldProfileName} has been deleted!`);
    }
    catch(err) {
        console.error(err);
    }
});


// This is for updating profiles
profilesRouter.patch("/update-profile/", async (req, res) => {
    // update one document
    try {
        const userData = await client.db("Database").collection("Profiles").updateOne({Username: req.body.Username}, {$set: {Password: req.body.Password}});
    }
    catch(err) {
        console.error(err);
    }
});


module.exports = profilesRouter;