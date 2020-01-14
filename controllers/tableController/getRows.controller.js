const mongoose = require("mongoose");

const {tableRowSchema} = require('../../database/models');

module.exports = (req, res) => {
    const tableRowModel = mongoose.model("tables", tableRowSchema);

    tableRowModel.find({}, (err, tableRows) => {
        if (err) return res.status(400).send({msg: `Can't return table rows: ${err}`});

        res.status(200).send({msg: "Table rows successfully returned", result: tableRows});
    });
};