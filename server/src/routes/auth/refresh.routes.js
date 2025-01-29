const router = require('express').Router();
const formatResponse = require('../../utils/formatResponse.js');
const { generateTokens } = require('../utils/generateTokens');
const jwtConfig = require('../../config/jwtConfig.js');
const verifyRefreshToken = require('../../middleware/verifyRefreshToken.js');

router.get('/refreshTokens', verifyRefreshToken, (req, res) => {
    try {
        const { user } = res.locals;

        const { accessToken, refreshToken } = generateTokens(user);

        res
            .cookie(jwtConfig.refresh.type, refreshToken)
            .json(formatResponse(200, 'Refresh tokens success', {
                user,
                accessToken
            }));

    } catch (error) {
        res.json(formatResponse(500, null, null, error.message))
    }
});

module.exports = router