const router = require('express').Router();
const { where } = require('sequelize');
const {Photo, Animal} = require('../../db/models')
const formatResponse = require('../../utils/formatResponse')


router
    .route('/')
    .get(async(req,res)=>{
        try {
            const allAnimals = await Animal.findAll(
              {include:{
                model: Photo
              }}
            )
            const animals = allAnimals.map(el => el.get({plain:true}))
            res.status(200).json(formatResponse(200, 'Ok', animals))
        } catch (error) {
            res.status(400).json(formatResponse(400, 'Not found', null, error.message))
        }
            })
router
    .route('/:id')
    .delete(async (req,res)=>{
        try {
          const {id} = req.params
          
          const animal = await Animal.destroy({where:{id}})

          console.log(animal);
          

            res.status(200).json(formatResponse(200, 'OK! Animal  Deleted',animal))
        } catch (error) {
            res.status(400).json(formatResponse(400, 'Not found', null, error.message))
        }
            })




module.exports = router;
