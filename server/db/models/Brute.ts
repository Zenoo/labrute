import { INTEGER, Model, STRING } from 'sequelize';
import { Body } from './Body';
import sequelize from './_index';

export class Brute extends Model {
  declare name: string;
  declare gender: string;
  declare longHair: number;
  declare lowerRightArm: number;
  declare rightHand: number;
  declare upperRightArm: number;
  declare rightShoulder: number;
  declare rightFoot: number;
  declare lowerRightLeg: number;
  declare upperRightLeg: number;
  declare leftFoot: number;
  declare lowerLeftLeg: number;
  declare pelvis: number;
  declare upperLeftLeg: number;
  declare tummy: number;
  declare torso: number;
  declare head: number;
  declare leftHand: number;
  declare upperLeftArm: number;
  declare lowerLeftArm: number;
  declare leftShoulder: number;
}

export class BruteModel {
  declare id: number;
  declare name: string;
  declare gender: string;
  declare longHair: number;
  declare lowerRightArm: number;
  declare rightHand: number;
  declare upperRightArm: number;
  declare rightShoulder: number;
  declare rightFoot: number;
  declare lowerRightLeg: number;
  declare upperRightLeg: number;
  declare leftFoot: number;
  declare lowerLeftLeg: number;
  declare pelvis: number;
  declare upperLeftLeg: number;
  declare tummy: number;
  declare torso: number;
  declare head: number;
  declare leftHand: number;
  declare upperLeftArm: number;
  declare lowerLeftArm: number;
  declare leftShoulder: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Brute.init(
  {
    name: STRING(50),
    gender: STRING(50),
    longHair: INTEGER,
    lowerRightArm: INTEGER,
    rightHand: INTEGER,
    upperRightArm: INTEGER,
    rightShoulder: INTEGER,
    rightFoot: INTEGER,
    lowerRightLeg: INTEGER,
    upperRightLeg: INTEGER,
    leftFoot: INTEGER,
    lowerLeftLeg: INTEGER,
    pelvis: INTEGER,
    upperLeftLeg: INTEGER,
    tummy: INTEGER,
    torso: INTEGER,
    head: INTEGER,
    leftHand: INTEGER,
    upperLeftArm: INTEGER,
    lowerLeftArm: INTEGER,
    leftShoulder: INTEGER,
  },
  { sequelize, modelName: 'Brute' }
);

Brute.belongsTo(Body);