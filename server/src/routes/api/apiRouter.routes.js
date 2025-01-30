const router = require('express').Router();
const taxesRouter = require('./taxes.routes'); 
const animalsRouter = require('./animals.routes'); 
const uploadRouter =require('../api/uploadPhoto.routes')


router.use('/taxes', taxesRouter);
router.use('/animals', animalsRouter);
router.use('./uploadPhotos' , uploadRouter)

module.exports = router;
