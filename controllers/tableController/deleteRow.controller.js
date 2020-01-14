const mongoose = require("mongoose");
const objectId = require("mongodb").ObjectID;

const {tableRowSchema} = require('../../database/models');

module.exports = (req, res) => {
    if(!req.body) return res.status(400);

    const id = new objectId(req.params.id);

    const tableRowModel = mongoose.model("tables", tableRowSchema);

    tableRowModel.findOneAndDelete({_id: id}, (err, result) => {
        if (err) return res.status(400).send({msg: `Table wasn't deleted: ${err}`});

        res.status(200).send({msg: "Table was successfully deleted", result});
    });
};