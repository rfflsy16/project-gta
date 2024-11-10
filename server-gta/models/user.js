'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Character, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.Transaction, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'username is required'
        },
        notEmpty: {
          msg: 'username is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'email must be unique'
      },
      validate: {
        notNull: {
          msg: 'email is required'
        },
        notEmpty: {
          msg: 'email is required'
        },
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'password is required'
        },
        notEmpty: {
          msg: 'password is required'
        },
        len: {
          args: 5,
          msg: 'Password minimum 5 character'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, option) => {
    instance.password = hash(instance.password)
  })
  return User;
};