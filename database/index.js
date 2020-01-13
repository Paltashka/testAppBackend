// module.exports = ((app) => {
//     const MongoClient = require('mongodb').MongoClient;
//     const url = "mongodb://localhost:27017/";
//
//     const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
//
//     let dbClient;
//
//     mongoClient.connect((err, client) => {
//         if (err) throw err;
//
//         dbClient = client;
//
//         app.locals.tableCollection = client.db("testAppDB").collection("table");
//
//         console.log("Connected to MongoDB");
//     });
// });

const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb://localhost:27017/testAppDB", { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Mongoose connected");
};
