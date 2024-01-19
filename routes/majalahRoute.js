const express = require('express');
const router = express.Router();
const majalahController = require('../controllers/majalahController');

router.post('/majalah', majalahController.createMajalah)
// router.get('/majalah', majalahController.createMajalah)
// router.get('/majalah/:id', majalahController.createMajalah)
// router.delete('/majalah', majalahController.createMajalah)
// router.put('/majalah', majalahController.createMajalah)

module.exports = router;