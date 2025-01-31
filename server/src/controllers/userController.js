const formatResponse = require('../utils/formatResponse');
const bcrypt = require('bcrypt');
const { generateTokens } = require('../utils/generateTokens');
const jwtConfig = require('../config/jwtConfig');
const UserValidator = require('../utils/userValidation');
const UserService = require('../service/userService');

module.exports = class UserController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const check = UserValidator.validateLogin({ email, password });

      if (!check.isValid) {
        return res.status(400).json(formatResponse(400, check.error));
      }

      if (email && password) {
        const candidate = await UserService.authenticate(email);

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
          .cookie(jwtConfig.refresh.type, refreshToken)
          .json(formatResponse(200, 'login success', { accessToken, user }));
      } else {
        res.status(400).json(formatResponse(400, 'Нужно заполнить все поля'));
      }
    } catch (error) {
      res
        .status(500)
        .json(formatResponse(200, 'Unxpected server error', null, error.message));
    }
  }

  static async logout(req, res) {
    try {
      res
        .clearCookie(jwtConfig.refresh.type)
        .json(formatResponse('200', 'logout success'));
    } catch (error) {
      res.json(formatResponse('500', 'Server error', null, error.message));
    }
  }

  static async reg(req, res) {
    try {
      const { username, email, password } = req.body;

      if (username && email && password) {
        const check = UserValidator.validateReg({ username, email, password });

        if (!check.isValid) {
          return res.status(400).json(formatResponse(400, check.error));
        }

        const hashPass = await bcrypt.hash(password, 10);

        const candidate = await UserService.createNewUser({ username, email, hashPass });

        const user = candidate.get({ plain: true });

        delete user.password;

        const { accessToken, refreshToken } = generateTokens(user);

        res
          .status(201)
          .cookie(jwtConfig.refresh.type, refreshToken)
          .json(formatResponse(201, 'UserCreated', { accessToken, user }));
      } else {
        res.status(400).json(formatResponse(400, 'Нужно заполнить все поля'));
      }
    } catch (error) {
      const { message } = error.errors[0];
      if (message === 'email must be unique') {
        return res
          .status(400)
          .json(formatResponse(400, 'Пользователь с таким email уже существует'));
      }
      res.status(500).json(formatResponse(200, 'Unxpected server error', null, error));
    }
  }

  static async refreshTokens(req, res) {
    try {
      const { user } = res.locals;

      const { accessToken, refreshToken } = generateTokens(user);

      res.cookie(jwtConfig.refresh.type, refreshToken).json(
        formatResponse(200, 'Refresh tokens success', {
          user,
          accessToken,
        }),
      );
    } catch (error) {
      res.json(formatResponse(500, null, null, error.message));
    }
  }
};
