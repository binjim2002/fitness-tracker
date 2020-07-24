const express = require("express");

const app = express();

app.use(express.static('public'))

const PORT = 3000;

app.get("/", function(req, res){

    
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(PORT, () => {
    console.log('app running @ http://localhost:'+PORT)
})