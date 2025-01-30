'use strict';

const {Animal} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Animal.bulkCreate([
      {
   
        title: "Африканский слон",
        description: "Африканский слон — самое крупное наземное животное. Эти великолепные создания могут весить до 5400 кг. Слоны имеют большие уши, которые помогают регулировать температуру тела, и длинные хоботы для общения и питания."
      },
      {
    
        title: "Лев",
        description: "Лев — хищник, обитающий в Африке и Индии. Львы известны своими гривами и живут в прайдах. Львицы занимаются охотой, а самцы защищают прайд. Львы под угрозой исчезновения из-за разрушения среды обитания и браконьерства."
      },
      {
    
        title: "Гигантская панда",
        description: "Гигантская панда — символ Китая, проводит почти всё время, поедая бамбук. Панды — одиночные животные, за исключением сезона размножения. Из-за фрагментации среды обитания они остаются под угрозой исчезновения."
      },
      {
      
        title: "Белоголовый орлан",
        description: "Белоголовый орлан — национальный символ США. Эти хищные птицы охотятся на рыбу и обитают вблизи водоемов. Орланы были на грани исчезновения, но благодаря охране их популяция восстановилась."
      },
      {
      title: "Голубой кит",
        description: "Голубой кит — самое крупное животное на Земле. Он питается крилем и может мигрировать между полярными и более тёплыми водами. Голубые киты находились на грани исчезновения, но благодаря международной охране их популяция восстанавливается."
      },
      {
  
        title: "Тигр",
        description: "Тигр — крупнейший хищник семейства кошачьих. Он обитает в лесах Азии и охотится на крупных животных, таких как олени. Тигры находятся под угрозой исчезновения из-за браконьерства и утраты среды обитания."
      },
      {
 
        title: "Коала",
        description: "Коала — сумчатое животное Австралии, которое живет в эвкалиптовых лесах. Оно питается листьями эвкалипта и большую часть времени проводит во сне. Коалы находятся под угрозой из-за разрушения лесов и лесных пожаров."
      },
      {

        title: "Гепард",
        description: "Гепард — самое быстрое наземное животное, развивающее скорость до 100 км/ч. Он охотится на антилоп и зебр, используя свою скорость. Гепарды находятся под угрозой исчезновения из-за утраты среды обитания и браконьерства."
      },
      {
      
        title: "Жираф",
        description: "Жираф — самое высокое животное на Земле, достигающее 5,5 метров. Он питается листьями с высоких деревьев и может развивать скорость до 60 км/ч. Жирафы находятся под угрозой из-за разрушения среды обитания."
      },
      {
        title: "Крокодил",
        description: "Крокодилы — хищники, обитающие в тропиках и субтропиках. Они питаются рыбой и млекопитающими, используя мощные челюсти. Эти животные существуют с древних времен, но под угрозой из-за охоты и загрязнения водоемов."
      }
    ]) 
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Animals', null, {});
  
  }
};