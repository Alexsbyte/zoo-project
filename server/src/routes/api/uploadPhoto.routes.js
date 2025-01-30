const router = require('express').Router();
const upload = require('../../middleware/multer');

router.post('/upload', upload.array('photos', 5), (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'Файл не загружен' });
    }
    res.json({ message: 'Файлы успешно загружены!', files: req.files });
  });
module.exports = router;
