const router = require('express').Router();
const upload = require('../../middleware/multer');
const {Animal, Photo} = require('../../db/models')
const formatResponse  = require('../../utils/formatResponse')
const createFolder = require('../../middleware/createFolder')

router.post('/',createFolder, upload.array('photo', 5), async(req, res) => {
    console.log(req.body.title, req.body.description, req.files);

   
  try {
    if (!req.body.title || req.files.length === 0) {
    
        return res.status(400).json({ error: 'Файл не загружен' });
      }
      const {title , description} =  req.body
      const pathNameAnimalPhoto = req.body.title
  console.log(pathNameAnimalPhoto);
  
          const animal = await Animal.create({title,description})
          console.log(animal);
          
          if(!animal){
             return  res.status(400).json(formatResponse(400, 'Животное не создано' ))
           }
           console.log(req.files)
           const photos =  req.files.map(({filename})=> ({ url:`/${pathNameAnimalPhoto}/${filename}`, animalsId: animal.id}))
          //  console.log(photos)
          
           const arrPhoto = await Photo.bulkCreate(photos)
          //  console.log(arrPhoto);
           if(!arrPhoto){
            return  res.status(400).json(formatResponse(400, 'Фото не добавлено' ))
           }
           return res.status(201).json(formatResponse(201, 'Успешно добавлено' , animal))
  
  } catch (error) {
    res.status(500).json(formatResponse(500, 'Сервер не отвечает', null, error ))
  }
    
  });

  

module.exports = router;
