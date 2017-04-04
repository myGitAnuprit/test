var express =require("express");
var http = require('http');

//define a port we want to listen to
const port=8080; 
const hostname = '127.0.0.1';
//We need a function which handles requests and send response
//function handleRequest(request, response){
   
//Create a server
var server = http.createServer((request, response) => 
{

// code for weather app
var weather = require('openweather-apis');
	weather.setLang('in');
	weather.setCoordinate('13.0827','80.2707');
	weather.setUnits('metric');
	weather.setAPPID('9c4cef7486cbd69cca44fdc1acc10e88');


	weather.getPressure(function(err, pres)
	{
       		  response.end(" Pressure : " +pres+ " Pascal. ");
   	 });
    		 

	 weather.getTemperature(function(err, temp)
   	  {
        		  response.end(" Tempreture : " +temp+ " Celcius. ");
	   });
   		
	 weather.getHumidity(function(err, hum)
       	 {
      		    response.end(" Humidity: " +hum+ " Grams per cubic meter. ");
	 		
    		
  	});
});
//start the server

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
