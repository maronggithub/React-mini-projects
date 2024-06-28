import { React, useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserCity,
  fetchWeatherData,
  fetchCityPhoto
} from "../store/modules/weatherData";

function Weather() {
  const cityName = useSelector((state) => state.weatherdata.cityName);
  const weatherData = useSelector((state) => state.weatherdata.weatherData);
  const cityPhotoUrl = useSelector((state) => state.weatherdata.cityPhoto);
  const dispatch = useDispatch();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      dispatch(fetchUserCity()).then(() => setInitialLoad(false));
      dispatch(fetchWeatherData()); 
      dispatch(fetchCityPhoto());
    } else if (cityName) {
      dispatch(fetchWeatherData(cityName));
      dispatch(fetchCityPhoto());
    }
  }, [dispatch, cityName, initialLoad]);

  // 转换温度
  const convertToCelsius = (tempInKelvin) => {
    return (tempInKelvin - 273.15).toFixed(2); // 转换为摄氏度并保留两位小数
  };
  const getIconUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <div className="weatherbox" id="weatherbox">
      <Searchbox />
      {weatherData && weatherData.weather[0].icon && (
        <img
          className="icon"
          src={getIconUrl(weatherData.weather[0].icon)}
          alt="Weather icon"
        />
      )}
      <h1 className="tempature">
        {weatherData
          ? `${convertToCelsius(weatherData.main.temp)} °C`
          : "Loading..."}
      </h1>
      <h2 className="description">
        {weatherData ? weatherData.weather[0].description : "Loading..."}
      </h2>
      <div
        className="weatherpic"
        style={{ backgroundImage: `url(${cityPhotoUrl})` }}
      >
        <span>{cityName}</span>
      </div>
    </div>
  );
}

export default Weather;
