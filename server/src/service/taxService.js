const { Tax } = require('../db/models');

exports.getAllTaxes = async () => {
  return await Tax.findAll();
};

exports.createTax = async (taxData) => {
  return await Tax.create(taxData);
};

exports.updateTax = async (id, taxData) => {
  const tax = await Tax.findByPk(id);
  if (!tax) {
    throw new Error('Тариф не найден');
  }
  return await tax.update(taxData);
};

exports.deleteTax = async (id) => {
  const tax = await Tax.findByPk(id);
  if (!tax) {
    throw new Error('Тариф не найден');
  }
  await tax.destroy();
};
