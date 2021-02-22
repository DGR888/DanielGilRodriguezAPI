function weatherBalloon( cityID ) {
    var key = '{386a395786b617602ecef1bbaa6fe878}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + SPAIN+ '&appid=386a395786b617602ecef1bbaa6fe878')  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
     
    });
  }
  function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	var description = d.weather[0].description;
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
	
	if( description.indexOf('Lluvia') > 0 ) {
  	document.body.className = 'Lluvia';
  } else if( description.indexOf('Nublado') > 0 ) {
  	document.body.className = 'Nublado';
  } else if( description.indexOf('soleado') > 0 ) {
  	document.body.className = 'Soleado';
  }
}
  window.onload = function() {
    weatherBalloon( 6167865 );
  }