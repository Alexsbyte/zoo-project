'use strict';
const {Photo} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Photo.bulkCreate([
    {
      
      url: '/Elephant/1-Elepaht.jpg',
      animalsId: 1
    },
    {
     
      url: '/Elephant/2-elepph.jpg',
      animalsId: 1
    },
    {
    
      url: '/Lion/2-lion.jpg',
      animalsId: 2
    },
    {
      
      url: '/Lion/1-lion.jpg',
      animalsId: 2
    },
    {
     
      url: '/Giant Pand/1-panda.jpg',
      animalsId: 3
    },
    {

      url: '/Giant Pand/2-panda.jpg',
      animalsId: 3
    },
    {

      url: '/Bald Eagle/1-eagl.jpg',
      animalsId: 4
    },
    {

      url: '/Bald Eagle/2-eagle.jpg',
      animalsId: 4
    },
  ])
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Photos', null, {});
     
  }
};