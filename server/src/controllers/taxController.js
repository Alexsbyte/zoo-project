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

exports.createTax = async (req, res) => {
  const { Adult, Child, weekendAdult, weekendChild } = req.body;

  try {
    const newTax = await Tax.create({
      Adult,
      Child,
      weekendAdult,
      weekendChild,
    });
    res.status(201).json(newTax);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при создании тарифа' });
  }
};

exports.updateTax = async (req, res) => {
  const { id } = req.params;
  const { Adult, Child, weekendAdult, weekendChild } = req.body;

  try {
    const tax = await Tax.findByPk(id);

    if (!tax) {
      return res.status(404).json({ error: 'Тариф не найден' });
    }

    tax.Adult = Adult;
    tax.Child = Child;
    tax.weekendAdult = weekendAdult;
    tax.weekendChild = weekendChild;

    await tax.save();

    res.json(tax);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при обновлении тарифа' });
  }
};

exports.deleteTax = async (req, res) => {
  const { id } = req.params;

  try {
    const tax = await Tax.findByPk(id);

    if (!tax) {
      return res.status(404).json({ error: 'Тариф не найден' });
    }

    await tax.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при удалении тарифа' });
  }
};
