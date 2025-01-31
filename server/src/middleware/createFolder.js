
const fs =  require('fs')
const path = require('path')

module.exports =  function createFolder(req, res, next) {
    console.log('FOLDER');
    
    try {
        const dirName = req.headers.title
        
        const dirPath = path.resolve(__dirname, `../../public/images/${dirName}`);

        // Создаём директорию, и если она не существует
         fs.mkdirSync(dirPath, { recursive: true })
         

        next();
    } catch (error) {
        console.log('Invalid access token');
        res.status(403).send('Invalid access token');
    }
}