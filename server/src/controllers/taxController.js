const taxService = require('../service/taxService');

exports.getAllTaxes = async (req, res) => {
  try {
    const taxes = await taxService.getAllTaxes();
    res.json(taxes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении тарифов' });
  }
};

exports.updateTax = async (req, res) => {
  const { Adult, Child, weekendAdult, weekendChild } = req.body;

  try {
    const updatedTax = await taxService.updateTax({
      Adult,
      Child,
      weekendAdult,
      weekendChild,
    });
    res.json(updatedTax);
  } catch (error) {
    console.error('Ошибка при обновлении тарифа:', error);
    res.status(500).json({ error: 'Ошибка при обновлении тарифа' });
  }
};
