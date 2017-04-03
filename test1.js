
var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});


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

