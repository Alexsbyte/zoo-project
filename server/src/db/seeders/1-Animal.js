'use strict';

const {Animal} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Animal.bulkCreate([
      
        {
          "title": "Elephant",
          "description": "The African elephant is the largest land animal. These magnificent creatures can weigh up to 5,400 kg. Elephants have large ears that help regulate body temperature and long trunks for communication and feeding."
        },
        {
          "title": "Lion",
          "description": "The lion is a predator found in Africa and India. Lions are known for their manes and live in prides. Lionesses do the hunting, while males protect the pride. Lions are endangered due to habitat destruction and poaching."
        },
        {
          "title": "Giant Panda",
          "description": "The giant panda, a symbol of China, spends most of its time eating bamboo. Pandas are solitary animals except during the mating season. Due to habitat fragmentation, they remain endangered."
        },
        {
          "title": "Bald Eagle",
          "description": "The bald eagle is the national symbol of the United States. These birds of prey hunt fish and live near bodies of water. Bald eagles were once on the brink of extinction, but conservation efforts have helped restore their population."
        }
      
      
    ]) 
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Animals', null, {});
  
  }
};