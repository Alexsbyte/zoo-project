const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Customer } = require('../../db/models');
const formatResponse = require('../../utils/formatResponse');
const { generateTokens } = require('../../utils/generateTokens');
const jwtConfig = require('../../config/jwtConfig');

router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (username && email && password) {
      const hashPass = await bcrypt.hash(password, 10);

      const candidate = await Customer.create({
        username,
        email,
        password: hashPass,
        roleId: 2,
      });
      const user = candidate.get({ plain: true });

      delete user.password;

      const { accessToken, refreshToken } = generateTokens(user);

      res
        .status(201)
        .cookie(jwtConfig.refresh.type, refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .json(formatResponse(201, 'UserCreated', { accessToken, user }));
    } else {
      res.status(400).json(formatResponse(400, 'Нужно заполнить все поля'));
    }
  } catch (error) {
    res
      .status(500)
      .json(formatResponse(200, 'Unxpected server error', null, error.message));
  }
});

module.exports = router;

module.exports = router;
