const express = require("express");
const router = express.Router();
// import db
let smsdb = require("../db");

// get all SMS messages
router.get("/:version_number/deku/user/:id/sms/all", async (req, res) => {
    let { id } = req.params;
    let { version_number } = req.params;
    id = Number(id);
    version_number = Number(version_number);

    try {
      let sms = smsdb.find(sms => sms._id === id && sms.version_number === version_number);
      res.status(200).json({
        data: sms
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  module.exports = router;