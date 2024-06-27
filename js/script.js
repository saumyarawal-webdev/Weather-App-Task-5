//api script goes here
const data = null;



async function fetchWeather(){
const city = document.getElementById('city').value;

//     console.log(city);
//     const xhr = new XMLHttpRequest();
// xhr.withCredentials = false;
//     xhr.addEventListener('readystatechange', function () {
//         if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//         }
//         });
        
//         xhr.open('GET', `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`);
//         xhr.setRequestHeader('x-rapidapi-key', 'f700a4f1bemsh5590250c176984bp170922jsn3ba372de6f4d');
//         xhr.setRequestHeader('x-rapidapi-host', 'weather-by-api-ninjas.p.rapidapi.com');
        
//         xhr.send(data);


const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
    
		'x-rapidapi-key': 'f700a4f1bemsh5590250c176984bp170922jsn3ba372de6f4d',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    if(response.status==400){
      document.querySelector('.errormsg').style.display="block";
      document.querySelector('.weather').style.display="none";
    }
    else{
      document.querySelector('.weather').style.display="block";
      document.querySelector('.errormsg').style.display="none";
      const result = await response.text();
      
        document.querySelector('.weather').style.display='block';
        let obj=JSON.parse(result);
        
        let cityname=document.getElementById('cityname');
        let temp=document.getElementById('temp');
        let humidity=document.getElementById('humidity');
        let wind=document.getElementById('wind');
        temp.innerText=obj.temp;
        let cityC=city.charAt(0).toUpperCase() + city.slice(1);
        cityname.innerText=cityC;
        humidity.innerText=obj.humidity;
        wind.innerText=obj.wind_speed;
        let wimg=document.getElementById('wimg');
       
        const weatherImages = {
            'clouds.png': [76, 100],
            'mist.png': [51, 75],
            'drizzle.png': [26, 50],
            'snow.png': [-1, 20],
            'rain.png': [81, 100],
            'clear.png': [0, 25]
          };
          const cloudPct=obj.cloud_pct;
          for (const [image, ranges] of Object.entries(weatherImages)) {
            if (cloudPct >= ranges[0] && cloudPct <= ranges[1]) {
              wimg.src = `images/${image}`;
              
            }
          }
    }

    

} catch (error) {
	console.error(error);
}

        
}