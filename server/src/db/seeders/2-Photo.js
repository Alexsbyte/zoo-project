'use strict';
const {Photo} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Photo.bulkCreate([
    {
      
      url: '/images/1-Elepaht.jpg',
      animalsId: 1
    },
    {
     
      url: '/images/2-elepph.jpg',
      animalsId: 1
    },
    {
    
      url: '/images/2-lion.jpg',
      animalsId: 2
    },
    {
      
      url: '/images/1-lion.jpg',
      animalsId: 2
    },
    {
     
      url: '/images/1-panda.jpg',
      animalsId: 3
    },
    {

      url: '/images/2-panda.jpg',
      animalsId: 3
    },
    {

      url: '/images/1-eagl.jpg',
      animalsId: 4
    },
    {

      url: '/images/2-eagle.jpg',
      animalsId: 4
    },
  ])
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Photos', null, {});
     
  }
};