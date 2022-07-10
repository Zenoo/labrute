import { INTEGER, Model } from 'sequelize';
import { Brute } from './Brute';
import sequelize from './_index';

export class Body extends Model {
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

export class BodyModel {
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

Body.init(
  {
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
  { sequelize, modelName: 'Body' }
);

Body.hasOne(Brute);