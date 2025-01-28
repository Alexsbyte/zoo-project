const router = require("express").Router()
const regRouter = require('../')// заполнить 
const loginRouter = require()// заполнить 
const logoutRouter = require()// заполнить 


router.use('/reg', regRouter)
router.use('/login', loginRouter)
router.use('/logout', logoutRouter)



module.exports = router