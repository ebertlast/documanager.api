var jwt = require('jsonwebtoken');
var _ = require('lodash');
var settings = require('../settings');

exports.verifyJWTToken = function (token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, settings.JWT_secret, (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err)
            }

            resolve(decodedToken)
        })
    })
}

exports.createJWToken = function (details) {
    if (typeof details !== 'object') {
        details = {}
    }

    if (!details.maxAge || typeof details.maxAge !== 'number') {
        details.maxAge = settings.JWT_maxAge || 3600
    }

    details.sessionData = _.reduce(details.sessionData || {}, (memo, val, key) => {
        if (typeof val !== "function" && key !== "password") {
            memo[key] = val
        }
        return memo
    }, {})

    let token = jwt.sign({
        data: details.sessionData
    }, settings.JWT_secret, {
            expiresIn: details.maxAge,
            algorithm: settings.JWT_algorithm || 'HS256'
        })

    return token
}