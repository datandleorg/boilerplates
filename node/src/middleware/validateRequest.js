const validateRequest = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property], { abortEarly: false });
        
        if (!error) {
            next();
        } else {
            const errors = error.details.map(detail => ({
                field: detail.path.join('.'),
                message: detail.message
            }));
            
            res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors
            });
        }
    };
};

module.exports = validateRequest;