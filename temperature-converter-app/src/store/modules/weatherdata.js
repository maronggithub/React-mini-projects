import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const weatherDataStore = createSlice({
  name: "weatherdata",
  initialState: {
    cityName: "",
    weatherData: "",
  },
  reducers: {
    // 在recucer里面设置action
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

const { setCityName, setWeatherData } = weatherDataStore.actions;
//异步请求部分

// 调用 API 获取城市名字
const fetchUserCity = () => {
  return async (dispatch) => {
    try {
      const cityRes = await axios.get("http://ip-api.com/json/");
      console.log(cityRes);
      dispatch(setCityName(cityRes.data.city));
    } catch (error) {
      console.error("Error fetching user city:", error);
    }
  };
};

const fetchWeatherData = () => {
  return async (dispatch, getState) => {
    const apiKey = "1b18bc4c88485aa26026e6d4f1726052";
    const state = getState();
    const cityName = state.weatherdata.cityName;
    console.log(cityName);

    if (cityName) {
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        const WeatherRes = await axios.get(apiUrl);
        dispatch(setWeatherData(WeatherRes.data));
        console.log(WeatherRes);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };
};


const weatherDataReducer = weatherDataStore.reducer;
export { setCityName,fetchUserCity,fetchWeatherData };
export default weatherDataReducer;
