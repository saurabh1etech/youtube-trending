const express = require('express');
const ytController = require('../controllers/ytController');

const router = express.Router();

router.route('/').get(ytController.getVideos);
router.route('/getVideosList').get(ytController.getVideosList);
router.route('/getVideo/:id').get(ytController.getVideo);

module.exports = router;

