const mongoose = require("mongoose");
const objectId = require("mongodb").ObjectID;

const {tableRowSchema} = require('../../database/models');

module.exports = (req, res) => {
    if(!req.body) return res.status(400);

    const id = new objectId(req.params.id);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    let newTableRow = {firstname, lastname, email};

    const tableRowModel = mongoose.model("tables", tableRowSchema);

    tableRowModel.findOneAndUpdate({_id: id}, { $set: {firstname, lastname, email} },
        {returnOriginal: false}, (err, result) => {
            if (err) return res.status(400).send({msg: `Table wasn't updated: ${err}`});

            res.status(200).send({msg: "Table was successfully updated", result: newTableRow});
        });
};