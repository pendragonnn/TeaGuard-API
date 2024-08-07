'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diseaseDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  diseaseDetail.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    diseaseName: DataTypes.STRING,
    diseaseImgPreview: DataTypes.STRING,
    diseaseImgDetail: DataTypes.STRING,
    diseaseExplanation: DataTypes.TEXT('long'),
    diseasePrevention: DataTypes.TEXT('long'),
    diseaseRecommendation: DataTypes.TEXT('long')
  }, {
    sequelize,
    modelName: 'diseaseDetail',
  });
  return diseaseDetail;
};