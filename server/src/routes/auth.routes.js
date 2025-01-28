const router = require('express').Router();
const regRouter = require('./auth/reg.routes');
const loginRouter = require('./auth/login.routes');
const logoutRouter = require('./auth/logout.routes');

router.use('/reg', regRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);

module.exports = router;
