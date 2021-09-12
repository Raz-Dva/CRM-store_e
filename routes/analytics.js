const express = require('express')
const controller = require('../controllers/analytics')
const router = express.Router();

router.post('/analytics', controller.analytics)
router.post('/overview', controller.overview)


module.exports = router;