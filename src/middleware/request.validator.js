const {
    diseaseSchema
} = require("../schemas/index.schemas");

const diseaseValidator = (req, res, next) => {
    const diseaseData = req.body;

    const { error } = diseaseSchema.validate(diseaseData);

    if (error) {
        return res.status(400).json({
            status: false,
            message: error.details[0].message
        });
    }
    next();
};

module.exports = {
    diseaseValidator,
};
