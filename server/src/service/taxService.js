const { Tax } = require('../db/models');

exports.getAllTaxes = async () => {
  const taxes = await Tax.findAll();
  return taxes;
};

exports.updateTax = async (taxData) => {
  const tax = await Tax.findOne();
  if (!tax) {
    throw new Error('Тариф не найден');
  }

  return await tax.update(taxData);
};
