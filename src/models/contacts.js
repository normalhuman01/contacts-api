
'use strict';
import Sequelize from 'sequelize';

export default class contacts extends Sequelize.Model {
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
        phone: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
          type: DataTypes.STRING,
          allowNull: true
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