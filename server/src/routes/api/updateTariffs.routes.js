const express = require('express');
const router = express.Router();
const taxController = require('../../controllers/taxController');

router
  .get('/', taxController.getAllTaxes)
  .put('/', taxController.updateTax) 


module.exports = router;
