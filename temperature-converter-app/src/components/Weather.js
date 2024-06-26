import { React, useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserCity,
  fetchWeatherData,
} from "../store/modules/weatherData";

function Weather() {
  const cityName = useSelector((state) => state.weatherdata.cityName);
  const weatherData = useSelector((state) => state.weatherdata.weatherData);
  const dispatch = useDispatch();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      dispatch(fetchUserCity()).then(() => setInitialLoad(false));
    } else if (cityName) {
      dispatch(fetchWeatherData(cityName));
    }
  }, [dispatch, cityName, initialLoad]);

  // 转换温度
  const convertToCelsius = (tempInKelvin) => {
    return (tempInKelvin - 273.15).toFixed(2); // 转换为摄氏度并保留两位小数
  };

  return (
    <div className="weatherbox" id="weatherbox">
      <Searchbox />
      <div className="weatherpic">{cityName}</div>
      <h1 className="tempature">
        {weatherData
          ? `${convertToCelsius(weatherData.main.temp)} °C`
          : "Loading..."}
      </h1>
      <h2 className="description">
        {weatherData ? weatherData.weather[0].description : "Loading..."}
      </h2>
    </div>
  );
}

export default Weather;
