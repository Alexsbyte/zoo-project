'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zoo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Customer , Animal , Tax}) {
      this.belongsTo(Customer, {foreignKey: 'customerId'})
      this.belongsTo(Animal, {foreignKey: 'animalId'})
      this.belongsTo(Tax, {foreignKey: 'taxId'})
    }
  }
  Zoo.init({
    name: DataTypes.STRING,
    customerId: DataTypes.INTEGER,
    animalsId: DataTypes.INTEGER,
    taxId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Zoo',
  });
  return Zoo;
};