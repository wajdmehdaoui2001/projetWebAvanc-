const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(constants.VALIDATION_ERROR).json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(constants.UNAUTHORIZED).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.status(constants.NOT_FOUND).json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            res.status(statusCode).json({
                title: "successed",
                message: "request successed",
                stackTrace: err.stack
            });
            break;
    }
};

module.exports = errorHandler;
