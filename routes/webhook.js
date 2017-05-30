var express = require('express');
var router = express.Router();

var config = require('../config/default');

/* GET hello world page. */
router.get('/webhook', function(req, res, next) {
  if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === config.validationToken) {
      console.log("Validating webhook");
      res.status(200).send(req.query['hub.challenge']);
    } else {
      console.error("Failed validation. Make sure the validation tokens match.");
      res.sendStatus(403);
    }
});

module.exports = router;
