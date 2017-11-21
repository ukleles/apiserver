var express = require('express');
var router = express.Router();
var textCensor = require('text-censor');

/* GET home page. */
router.get('/', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
  textCensor.filter(chtml,function(tcerr,tcstr){
    if(tcerr){
      res.sendStatus(500);
      return;
    }    
    if(tcstr.split("*").length>1){
      var response = {status:false};
      res.send(JSON.stringify(response))
    }else{
      var response = {status:true};
      res.send(JSON.stringify(response))
    }

  })
});

module.exports = router;


