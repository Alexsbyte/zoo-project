class UserValidator {
  static validateReg(data) {
    const { username, email, password } = data;

    if (!username || typeof username !== 'string' || username.trim() === '') {
      return {
        isValid: false,
        error: 'Поле "name" не должно быть пустым или не верный формат',
      };
    }

    if (
      !email ||
      typeof email !== 'string' ||
      email.trim() === '' ||
      !this.validateEmail(email)
    ) {
      return {
        isValid: false,
        error: 'Поле "email" не должно быть пустым или не верный формат',
      };
    }

    if (
      !password ||
      typeof password !== 'string' ||
      password.trim() === '' ||
      !this.validatePassword(password)
    ) {
      return {
        isValid: false,
        error:
          'Пароль обязателен, не менее 8 символов, должен содержать строчные буквы, цифры,специальные символы.',
      };
    }
    return {
      isValid: true,
      error: null,
    };
  }

  static validateLogin(data) {
    const { email, password } = data;

    if (
      !email ||
      typeof email !== 'string' ||
      email.trim() === '' ||
      !this.validateEmail(email)
    ) {
      return {
        isValid: false,
        error: 'Поле "email" не должно быть пустым или не верный формат',
      };
    }

    if (!password || typeof password !== 'string' || password.trim() === '') {
      return {
        isValid: false,
        error: 'Password is required and must not be an empty string.',
      };
    }
    return {
      isValid: true,
      error: null,
    };
  }

  static validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  static validatePassword(password) {
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumbers = /\d/;
    const hasSpecialCharacters = /[!@#$%^&*()-,.?":{}|<>]/;
    const isValidLength = password.length >= 8;

    if (
      !hasUpperCase.test(password) ||
      !hasLowerCase.test(password) ||
      !hasNumbers.test(password) ||
      !hasSpecialCharacters.test(password) ||
      !isValidLength
    ) {
      return false;
    }
    return true;
  }
}

module.exports = UserValidator;
