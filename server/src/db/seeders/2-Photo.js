'use strict';
const {Photo} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Photo.bulkCreate([
    {
      id: 1,
      url: '/images/1-Elepaht.jpg',
      animalsId: 1
    },
    {
      id: 2,
      url: '/images/2-elepph.jpg',
      animalsId: 1
    },
    {
      id: 3,
      url: '/images/2-lion.jpg',
      animalsId: 2
    },
    {
      id: 4,
      url: '/images/1-lion.jpg',
      animalsId: 2
    },
    {
      id: 5,
      url: '/images/1-panda.jpg',
      animalsId: 3
    },
    {
      id: 6,
      url: '/images/2-panda.jpg',
      animalsId: 3
    },
    {
      id: 7,
      url: '/images/1-eagl.jpg',
      animalsId: 4
    },
    {
      id: 8,
      url: '/images/2-eagle.jpg',
      animalsId: 4
    },
  ])
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Photos', null, {});
     
  }
};