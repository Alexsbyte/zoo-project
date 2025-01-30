const formatResponse = require('../../utils/formatResponse');
const { Customer } = require('../../db/models');
const bcrypt = require('bcrypt');
const { generateTokens } = require('../../utils/generateTokens');
const jwtConfig = require('../../config/jwtConfig');

const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const candidate = await Customer.findOne({
        where: {
          email,
        },
      });

      if (!candidate) {
        return res
          .status(400)
          .json(formatResponse(400, 'Неверное имя пользователя или пароль'));
      }

      const user = candidate.get({ plain: true });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json(formatResponse(400, 'Неверное имя пользователя или пароль'));
      }

      const { accessToken, refreshToken } = generateTokens(user);

      res
        .status(200)
        .cookie(jwtConfig.refresh.type, refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .json(formatResponse(200, 'login success', { accessToken, user }));
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
