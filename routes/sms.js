const express = require("express");
const router = express.Router();
// import db
let smsdb = require("../db");

// get all SMS messages
router.get("/:version_number/deku/user/:id/sms/all", async (req, res) => {
  let { id, version_number } = req.params;
  id = Number(id);
  version_number = Number(version_number);

    try {
      let sms = smsdb.filter(sms => sms._id === id && sms.version_number === version_number);
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

// get user's sent SMS messages
router.get("/:version_number/deku/user/:id/sms/:sent", async (req, res) => {
    let { id, version_number, sent } = req.params;
    id = Number(id);
    version_number = Number(version_number);
    sent = String(sent);

    try {
      let sms = smsdb.filter(sms => sms._id === id && sms.version_number === version_number && sms.status === sent);
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

// get SMS messages sent to user
router.get("/:version_number/deku/user/:id/sms/:received", async (req, res) => {
    let { id, version_number, received } = req.params;
    id = Number(id);
    version_number = Number(version_number);
    received = String(received);

    try {
      let sms = smsdb.filter(sms => sms._id === id && sms.version_number === version_number && sms.status === received);
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

// send sms
router.post("/:version_number/deku/user/:id/sms", async (req, res) => {
    res.send('message sent')
  });

  module.exports = router;