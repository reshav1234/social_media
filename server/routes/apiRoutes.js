const express = require('express');
const router = express.Router();
const {getFeed, postFeed, putFeed, deleteFeed} = require('../controllers/apiControl')


router.route('/').get(getFeed).post(postFeed)
router.route('/:id').put(putFeed).delete(deleteFeed)

module.exports = router
