const jwtConfig = {
    access: {
        type: 'accessToken',
        expiresIn: `${1000 * 60 * 60*2}`,
    }
};

module.exports = jwtConfig;