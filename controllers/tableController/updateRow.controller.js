const objectId = require("mongodb").ObjectID;

module.exports = (req, res) => {
    if(!req.body) return res.status(400);

    const id = new objectId(req.body.id);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    const collection = req.app.locals.tableCollection;

    collection.findOneAndUpdate({_id: id}, { $set: {firstname, lastname, email} },
        {returnOriginal: false}, (err, result) => {
            if (err) res.status(400).send({msg: `Table wasn't updated: ${err}`});

            res.status(200).send({msg: "Table was successfully updated", tableRow: result.value});
        });
};