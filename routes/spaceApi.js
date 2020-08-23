var express= require('express');
var router= express.Router();
var request=require('request');
router.get("/",function(req, res, next){
    res.send("working");
})

router.get("/getCapsules",(req, res)=>{
   request("https://api.spacexdata.com/v3/capsules",function(error, response,body){
       if(!error && response.statusCode==200){
        res.header("content-type", "application/json");
        res.header("Access-Control-Expose-Headers", "Link");
        res.status(200);   
        res.send(body);
          
       }
   })
})

router.get("/getLandpads/:Id",(req, res)=>{
   
    request(`https://api.spacexdata.com/v3/landpads/${req.params.Id}`,function(error, response,body){
        if(!error && response.statusCode==200){
         res.header("content-type", "application/json");
         res.header("Access-Control-Expose-Headers", "Link");
         res.status(200);
         res.send(body);
           
        }
    })
 })

module.exports=router;