module.exports = (req, res) => {
    if(!req.body) return res.status(400);

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    const collection = req.app.locals.tableCollection;

    collection.findOneAndDelete({firstname, lastname, email}, (err, result) => {
        if (err) res.status(400).send({msg: `Table wasn't deleted: ${err}`});

        res.status(200).send({msg: "Table was successfully deleted", tableRow: result.value})
    });
};