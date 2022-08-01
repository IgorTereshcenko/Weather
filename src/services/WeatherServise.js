
const WeatherServise = () => {
   
   const _baseURL = 'https://api.openweathermap.org/data/2.5/weather';
   const _APIKEY = '3d7891a22193528f3697763bad757015';
  
   const getResurce = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    
   const getWeather = async (city = 'Voronezh') => {
        const res = await getResurce(`${_baseURL}?q=${city}&units=metric&appid=${_APIKEY}`);
       
        return {
            name: res.name,
            temp: res.main.temp,
            humidity: res.main.humidity,
            speed: res.wind.speed,
            weather: res.weather[0].description,
            icon: res.weather[0].icon,
            
        }  
    }

    return {getWeather};

}

export default WeatherServise;
