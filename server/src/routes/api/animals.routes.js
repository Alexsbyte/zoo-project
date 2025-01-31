const router = require('express').Router();
const fs = require('fs').promises
const path = require('path')
const {Photo, Animal} = require('../../db/models')
const formatResponse = require('../../utils/formatResponse')



async function delFiles (id){
    try {
          console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,");
         const animal = await Animal.findOne({where:{id}})
          const dirPath = path.resolve(__dirname, '../../../public/images', animal.title);
          console.log(`Удаление папки: ${dirPath}`);
    
          // Удаляем папку рекурсивно, если она существует
          await fs.rm(dirPath, { recursive: true, force: true });
    
          console.log(`Папка ${dirPath} успешно удалена.`);
        } catch (err) {
          console.error(`Ошибка при удалении папки: ${err.message}`);
        }
    }

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
          await delFiles(id)
          const animal = await Animal.destroy({where:{id}})
          
          console.log(animal);
          

            res.status(200).json(formatResponse(200, 'OK! Animal  Deleted',animal))
        } catch (error) {
            res.status(400).json(formatResponse(400, 'Not found', null, error.message))
        }
            })




module.exports = router;
