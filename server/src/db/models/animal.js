'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Zoo, Photo}) {
      this.hasMany(Photo, {foreignKey: 'animalsId'})
      this.hasMany(Zoo, {foreignKey: 'animalsId'})
    }
  }
  Animal.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};