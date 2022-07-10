'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Bodies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      longHair: {
        type: Sequelize.INTEGER
      },
      lowerRightArm: {
        type: Sequelize.INTEGER
      },
      rightHand: {
        type: Sequelize.INTEGER
      },
      upperRightArm: {
        type: Sequelize.INTEGER
      },
      rightShoulder: {
        type: Sequelize.INTEGER
      },
      rightFoot: {
        type: Sequelize.INTEGER
      },
      lowerRightLeg: {
        type: Sequelize.INTEGER
      },
      upperRightLeg: {
        type: Sequelize.INTEGER
      },
      leftFoot: {
        type: Sequelize.INTEGER
      },
      lowerLeftLeg: {
        type: Sequelize.INTEGER
      },
      pelvis: {
        type: Sequelize.INTEGER
      },
      upperLeftLeg: {
        type: Sequelize.INTEGER
      },
      tummy: {
        type: Sequelize.INTEGER
      },
      torso: {
        type: Sequelize.INTEGER
      },
      head: {
        type: Sequelize.INTEGER
      },
      leftHand: {
        type: Sequelize.INTEGER
      },
      upperLeftArm: {
        type: Sequelize.INTEGER
      },
      leftShoulder: {
        type: Sequelize.INTEGER
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Bodies');
  }
};
