const jwtConfig = require('../../config/jwtConfig');
const formatResponse = require('../../utils/formatResponse');

const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res
      .clearCookie(jwtConfig.refresh.clearCookie)
      .json(formatResponse('200', 'logout success'));
  } catch (error) {
    res.json(formatResponse('500', 'Server error', null, error.message));
  }
});

module.exports = router;
