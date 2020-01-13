const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb://localhost:27017/testAppDB", { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Mongoose connected");
};
