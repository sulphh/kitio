const { expressjwt: jwt } = require('express-jwt');

const authenticate = jwt({
    secret: process.env.JWT_SECRET, // Make sure this matches what's in your .env file
    algorithms: ['HS256'],
    requestProperty: 'auth' // Ensures the decoded token is attached to the request.auth
});

// Function to generate a token
const generateToken = (user) => {
    const jwt = require('jsonwebtoken');
    return jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' }); // Adjust the expiresIn as needed
};

module.exports = { authenticate, generateToken };
