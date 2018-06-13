const  express =require('express');
const api = express.Router();


api.get('/products', function (req,res){
    res.send('ngon api')
})


module.exports  = api;