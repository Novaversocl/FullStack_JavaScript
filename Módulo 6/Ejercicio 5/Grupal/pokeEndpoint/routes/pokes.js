const express = require("express");

const router = express.Router();

router.post("/pokes", (req, res) =>{
    res.send("Create pokes");
});

module.exports = router;