
var http = require('http');
var ejs = require('ejs');
var  fs = require('fs');


http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //since we are in a request handler function
  //we're using readFile instead of readFileSync
  fs.readFile('index.html', 'utf-8', function(err, content) {
    if (err) {
      res.end('error occurred');
      return;
    }

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

    var renderedHtml = ejs.render(content, {pres: pres, temp:temp, hum:hum});  //get redered HTML code
    res.end(renderedHtml);
  });
}).listen(8000);


