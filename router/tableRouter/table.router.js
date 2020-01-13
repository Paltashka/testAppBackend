const router = require("express").Router();

const { tableController } = require('../../controllers');

router.get('/',
    tableController.getRows
);

router.post('/',
    tableController.insertRow
);

router.put('/',
    tableController.updateRow
);

router.delete('/',
    tableController.deleteRow
);

module.exports = router;