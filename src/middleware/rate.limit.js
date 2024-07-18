const rateLimit = require('express-rate-limit');

const configurationRateLimit = rateLimit({
    windowMs: 60 * 1000, 
    max: 30,
    message: "You have exceeded your 30 requests per minute limit.",
    headers: true,
});

module.exports = configurationRateLimit;