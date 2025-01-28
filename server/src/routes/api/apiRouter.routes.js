const router = require("express").Router()
const taxesRouter = require('../')// заполнить 
const animalsRouter = require()// заполнить 



router.use('/taxes', taxesRouter)
router.use('/animals', animalsRouter)



module.exports = router