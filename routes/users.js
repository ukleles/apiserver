var express = require('express');
var URL = require('url');
var router = express.Router();
var textCensor = require('text-censor');
router.get('/filterStr', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
  textCensor.filter(params.id,function(tcerr,tcstr){
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
