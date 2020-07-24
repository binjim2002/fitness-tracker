const router = require('express').Router();
const db = require('../models');

// get all workouts
router.get('/workouts', function(req, res){
    db.Workout.find().then(workouts=>{
        res.json(workouts)
    })
    
})

// call 2


module.exports = router;