const joi = require("joi");

const disease = joi.object({
    id: joi.string().required(),
    diseaseName: joi.string().required(),
    diseaseExplanation: joi.string().required(),
    diseaseRecommendation: joi.string().required()
});

module.exports = disease;