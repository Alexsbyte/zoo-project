const router = require('express').Router();
const taxesRouter = require('./taxes.routes'); 
const animalsRouter = require('./animals.routes'); 
const uploadRouter =require('../api/uploadPhoto.routes')


router.use('/taxes', taxesRouter);
router.use('/animals', animalsRouter);
router.use('/upload' , uploadRouter)

module.exports = router;
