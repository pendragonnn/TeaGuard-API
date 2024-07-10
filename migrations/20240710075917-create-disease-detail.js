'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('diseaseDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      diseaseName: {
        type: Sequelize.STRING
      },
      diseaseImgPreview: {
        type: Sequelize.STRING
      },
      diseaseImgDetail: {
        type: Sequelize.STRING
      },
      diseaseExplanation: {
        type: Sequelize.TEXT('long')
      },
      diseasePrevention: {
        type: Sequelize.TEXT('long')
      },
      diseaseRecommendation: {
        type: Sequelize.TEXT('long')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('diseaseDetails');
  }
};