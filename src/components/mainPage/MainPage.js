
import { useState, useEffect } from 'react';
import WeatherServise from '../../services/WeatherServise';
import './mainPage.scss';
import SearchCity from "../searchCity/SearchCity";
import Spinner from '../spinner/Spinner';

const MainPage = () => {

    const {getWeather} = WeatherServise();
    
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setCities(await getWeather())
            setLoading(false)
        })()
    }, [])

    const onChangeCity = async (e) => {
        setCities(await getWeather(e.target.value))
    }

    const content = loading ? <Spinner/> : <Wiev cities={cities}/>
    
    return (
        <div className="main_page">
            <div className="main_page__block">
                <div className="main_page__wrapper">
                <div className="city">{cities.name}</div>
                    <SearchCity onChangeCity={onChangeCity}/>
                    {content}
                </div>  
            </div>
        </div>
    )
}

const Wiev = ({cities}) => {
    return (
        <>
            <div className="main_page__waftherImg">
                <div className="weather">{cities.weather}</div>
                <div className="weather_icon"><img src={`http://openweathermap.org/img/wn/${cities.icon}@2x.png`} alt="" /></div>
            </div>
            <div className="main_page__date">
                <div className="temperature">{cities.temp} C</div>
                <div className="humidity">Humidity: {cities.humidity}</div>
                <div className="wind">Wind: {cities.speed} м/с</div>
            </div>
        </>
    )
}

export default MainPage;
