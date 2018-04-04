var express = require('express');
let request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let metaData = {title: 'Crypto'};
  let dataJSON = {};
  const dataURL = 'https://www.bitstamp.net/api/ticker/';
  request(dataURL, (err, response, body) => {
    if(err) {
      res.send('Error: ', err);
    }else {
      //console.log('Status Code: ', response && response.statusCode);
      dataJSON = JSON.parse(body);
      //console.log('body: ', dataJSON);
      res.render('index', { dataJSON, metaData });
    }
  });
  
});

module.exports = router;