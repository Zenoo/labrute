import { Model, STRING } from 'sequelize';
import sequelize from './_index';

export class User extends Model {
  declare email: string;
  declare login: string;
  declare language: string;
  declare password: string;
}

export class UserModel {
  declare id: number;
  declare email: string;
  declare login: string;
  declare language: string;
  declare password: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

User.init(
  {
    email: STRING(50),
    login: STRING(50),
    language: STRING(2),
    password: STRING(50)
  },
  { sequelize, modelName: 'User' }
);