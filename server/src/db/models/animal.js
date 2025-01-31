'use strict';
const fs = require('fs').promises
const path = require('path')
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
  Animal.addHook('afterDestroy', async (animal, options) => {
    return fs.rmdir(path.resolve(__dirname, `../../../public/images/${animal.title}`))
  });

  return Animal;
};