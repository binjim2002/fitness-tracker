const router = require('express').Router();
const path = require('path').resolve(__dirname, "..");


router.get('/', function(req, res){
    res.sendFile(path + '/public/index.html')
})
router.get('/exercise', function(req, res){
    res.sendFile(path + '/public/exercise.html');
})


module.exports = router;