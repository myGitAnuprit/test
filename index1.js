var express = require('express');
var app = express();
var path = require('path'); //Use the path to tell where find the .ejs files
// view engine setup
app.set('views', path.join(__dirname, 'day-3/test')); // here the .ejs files is in views folders
app.set('view engine', 'ejs'); //tell the template engine


var router = express.Router();

/* GET home page. */
router.get('/abc', function(req, res, next) { // route for '/'
  var weather = require('openweather-apis');
weather.setLang('in');

weather.setCoordinate('13.0827','80.2707');
weather.setUnits('metric');
weather.setAPPID('9c4cef7486cbd69cca44fdc1acc10e88');


weather.getPressure(function(err, pres){
        console.log(" Pressure : ", pres,"Pascal. ");
    });
 
weather.getTemperature(function(err, temp)
    {
            console.log(" Teampreture : ", temp," Celcius. ");
    });


weather.getHumidity(function(err, hum)
    {
            console.log(" Humidity: ", hum," grams per cubic meter. ");
    });
  res.render('index1', { //render the index.ejs
    temp: temp,
    pres: pres,
    hum: hum
  });
});

  var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
