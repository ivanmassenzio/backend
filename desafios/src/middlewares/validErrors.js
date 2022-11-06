const validateErrors = (req, res, next) => {
    if (!req.params.id) {
        res.json({
            error: 'bad request, mssing id'
        }).status(400);
    } else{
        next();
    }
}

module.exports = validateErrors