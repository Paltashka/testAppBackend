module.exports = (req, res) => {
    const collection = req.app.locals.tableCollection;

    collection.find({}).toArray((err, tableRows) => {
        if (err) res.status(400).send({msg: `Can't return table rows: ${err}`});

        res.status(200).send({msg: "Table rows successfully returned", tableRows});
    });
};