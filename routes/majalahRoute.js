const express = require('express');
const router = express.Router();
const majalahController = require('../controllers/majalahController');

router.post('/majalah', majalahController.createMajalah);
router.get('/majalah', majalahController.getAllMajalah);
router.get('/majalah/:id', majalahController.getMajalahById);
router.delete('/majalah/:id', majalahController.deleteMajalah);
router.put('/majalah/:id', majalahController.updateMajalah)

module.exports = router;