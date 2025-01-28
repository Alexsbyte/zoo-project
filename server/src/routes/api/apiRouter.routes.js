const router = require('express').Router();
const taxesRouter = require('./taxes.routes'); 
const animalsRouter = require('./animals.routes'); 

router.use('/taxes', taxesRouter);
router.use('/animals', animalsRouter);

module.exports = router;
