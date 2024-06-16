const express = require('express');

const router =  express.Router();

const {
    getAllPoints,
    postPoint,
    sumOfPoints,
    getAllPointsLastFive,
    getEverything,
    getLeaderBoard,
} = require('../controllers/point');


router.route('/:id').get(getAllPoints);
router.route('/leaderboard/:id').get(getLeaderBoard);
router.route('/everything/:id').get(getEverything);
router.route('/latestfive/:id').get(getAllPointsLastFive);
router.route('/sum/:id').get(sumOfPoints);
router.route('/').post(postPoint);

module.exports = router