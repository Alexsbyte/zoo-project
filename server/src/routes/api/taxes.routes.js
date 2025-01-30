const express = require('express');
const router = express.Router();
const taxController = require('../../controllers/taxController');

router
  .get('/', taxController.getAllTaxes)
  .post('/', taxController.createTax)
  .put('/:id', taxController.updateTax)
  .delete('/:id', taxController.deleteTax);

module.exports = router;
