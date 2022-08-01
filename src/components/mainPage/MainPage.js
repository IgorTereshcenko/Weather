
import { useState, useEffect } from 'react';
import WeatherServise from '../../services/WeatherServise';
import './mainPage.scss';
import rainsun from '../../resurse/rainSunImg.svg';
import Temperature from '../temperature/Temperature';
import Humidity from '../humidity/Humidity';
import Wind from '../wind/Wind';
import City from '../city/City';
import SearchCity from "../searchCity/SearchCity";
import Weather from '../weather/Weather';
import WeatherIcon from '../weatherIcon/WeatherIcon';

const MainPage = () => {

    const {getWeather} = WeatherServise();
    
    const [cities, setCities] = useState([]);

    useEffect(() => {
        (async () => {
            setCities(await getWeather())
        })()
      }, [])
    
    const onChangeCity = async (e) => {
        setCities(await getWeather(e.target.value))
    }
    
    return (
        <div className="main_page">
            <div className="main_page__block">
                <div className="main_page__wrapper">
                    <City name = {cities.name}/>
                    <SearchCity onChangeCity={onChangeCity}/>
                    <div className="main_page__waftherImg">
                        <Weather weather = {cities.weather}/>
                        <WeatherIcon icon={cities.icon}/>
                    </div>
                    <div className="main_page__date">
                        <Temperature temp = {cities.temp} />
                        <Humidity humidity = {cities.humidity + '%'}/>
                        <Wind speed = {cities.speed}/>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default MainPage;
