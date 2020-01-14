const mongoose = require("mongoose");

const {tableRowSchema} = require('../../database/models');

module.exports = async (req, res) => {
    if (!req.body) return res.status(400);

    const tableRowModel = mongoose.model("tables", tableRowSchema);

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    const tableRow = {firstname, lastname, email};

    await tableRowModel.insertMany(tableRow,{}, (err, result) => {
        if (err) return res.status(400).send({msg: `Table wasn't added: ${err}`});

        res.status(200).send({msg: "Table was successfully added", result});
    });
};