const jwtConfig = require('../../config/jwtConfig');
const formatResponse = require('../../utils/formatResponse');

const router = require('express').Router();

router.get('/', (req, res) => {
  res
    .clearCookie(jwtConfig.refresh.clearCookie)
    .json(formatResponse('200', 'logout success'));
});

module.exports = router;
