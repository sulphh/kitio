// errorHandler.js
module.exports = function (err, req, res, next) {
    console.error(err); // Log error for internal tracking

    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        error: {
            message: err.message || 'An unexpected error occurred.',
        },
    });
};
