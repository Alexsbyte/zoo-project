const router = require('express').Router();
const taxesRouter = require('./taxes.routes'); 
const animalsRouter = require('./animals.routes'); 
const updateTariffs = require('./updateTariffs.routes');

router.use('/taxes', taxesRouter);
router.use('/animals', animalsRouter);
router.use('/updateTariffs', updateTariffs);

module.exports = router;
