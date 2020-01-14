const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tableRowSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        match: /^([^0-9]*)$/
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        match: /^([^0-9]*)$/
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
        unique: true,
        match: /^\w+@[a-zA-Z_]+?\./
    }
});

module.exports = tableRowSchema;