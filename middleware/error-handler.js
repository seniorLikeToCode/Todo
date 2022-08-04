const { CustomAPIError } = require('../errors/custom-error');
const errorHandlerMiddlerWare = (err, req, res, next) => {
    if (err instanceof CustomAPIError)
        return res
            .status(err.statusCode)
            .json({ msg: err.message });
    else return res
        .status(500)
        .json({ msg: 'something went wrong, please try agains' });
}

module.exports = errorHandlerMiddlerWare;