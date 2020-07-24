const router = require('express').Router();
const db = require('../models');

// get all workouts
router.get('/workouts', function(req, res){
    db.Workout.find().then(workouts=>{
        res.json(workouts)
    })
    
})

// update workout
router.put('/workouts/:id',async function(req, res){
    // update existing workout
    try{
        const workout = await db.Workout.findOne({_id:req.params.id});
        workout.exercises.push(req.body);
        workout.save()
        res.json(workout);
    } catch(e){
        res.status(500).json({msg: "Bad request"}).end();
    }
    
})


module.exports = router;