
'use strict';
import Sequelize from 'sequelize';

export default class formFields extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        label: {
          type: DataTypes.STRING,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        required: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        errorMessage: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false
      }
    );
  }

  static associate(models) { // eslint-disable-line
  }
}