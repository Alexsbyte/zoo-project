

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination (req, file, cb) {
    // здесь cb - колбек, который возвращает значение для св-ва destination
    cb(null, 'public/images/'); // папка куда сохранять файлы
  },
  filename (req, file, cb) {
    // здесь cb - колбек, который возвращает значение для св-ва filename
    const uniqueSuffix = `${Date.now()  }-${  Math.round(Math.random() * 1e9)}`; // уникальное имя файла
    cb(null, uniqueSuffix + path.extname(file.originalname)); // file.originalname - расширение файла
  },
});


const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);
  
    if (extName && mimeType) {
      return cb(null, true);
    }
    cb(new Error('Только изображения форматов JPEG, PNG, GIF!'));
  };
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter // Максимальный размер файла 5MB
  }); // Обработка до 5 файлов (в поле 'photos')

module.exports = upload