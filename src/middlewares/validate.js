export const validate = schemaName => {
    return function (req, res, next) {
        const isValid = schemaName.validate(req.body)
        if (!isValid.error) return next()

        const errorDetails = isValid.error.details.map(detail => {
            const errorMessage = detail.message.replace(/["\\]/g, '');
            return errorMessage[0].toUpperCase() + errorMessage.substring(1);
        });
        return res
            .status(400)
            .json({ message: 'ValidationError', data: errorDetails[0]})
    }
}
