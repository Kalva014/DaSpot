const { MongoClient } = require('mongodb');
var dotenv = require('dotenv');

dotenv.config({ path: __dirname + `/../process.env` });

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.2viuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  // Connect to the DB
  try {
    await client.connect();
    client.once("open", () => console.log("MongoDB is connected now!"));
  }
  catch(err) {
    console.error(err);
  }
  
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
  
  // reading one document
  try {
    const userData = await client.db("Database").collection("Profiles").findOne({Username: "FirstUser"});
    console.log(userData);
  }
  catch(err) {
    console.error(err);
  }

  // update one document
  try {
    const userData = await client.db("Database").collection("Profiles").updateOne({Username: "FirstUser"}, {$set: {Password: "Newpassword"}});
    console.log(userData);
  }
  catch(err) {
    console.error(err);
  }

  // delete one document
  try {
    const userData = await client.db("Database").collection("Profiles").deleteOne({Username: "FirstUser"});
    console.log(userData);
  }
  catch(err) {
    console.error(err);
  }
}

main();

module.exports = client;