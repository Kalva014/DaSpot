const express = require("express");
const database = require("../database/connect_db")

const profileRoutes = express.Router();

// This is for getting the list of profiles available
profileRoutes.route("profile/add-profile").post((req, res) => {
    res.send("Testing to see if we made it");
});

// This is for adding profiles
profileRoutes.route("/profile").post((req, res) => {
    let profileDatabase = database.getDb("DaSpot").collection("profiles");
    profileDatabase.insertOne(req, (err) => {
        if(err) {
            console.error(err);
            res.status(400).send("Error adding profile!");
        }
    });

    database.close(); //THIS MIGHT GIVE AN ERROR
});



module.exports = profileRoutes;