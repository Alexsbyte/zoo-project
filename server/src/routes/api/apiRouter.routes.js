const router = require('express').Router();
const taxesRouter = require('./taxes.routes'); 
const animalsRouter = require('./animals.routes'); 
const updateTariffs = require('./updateTariffs.routes');
const uploadRouter =require('../api/uploadPhoto.routes')

router.use('/upload' , uploadRouter)
router.use('/taxes', taxesRouter);
router.use('/animals', animalsRouter);
router.use('/updateTariffs', updateTariffs);


module.exports = router;
