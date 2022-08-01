
const WeatherIcon = ({icon}) => {
    return (
        <div className="weather_icon"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /></div>
    )
}

export default WeatherIcon;
