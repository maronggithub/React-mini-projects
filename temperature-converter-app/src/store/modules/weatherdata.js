import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const weatherDataStore = createSlice({
  name: "weatherdata",
  initialState: {
    cityName: "",
    weatherData: "",
    cityPhoto: "",
  },
  reducers: {
    // 在recucer里面设置action
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setCityPhoto: (state, action) => {
      state.cityPhoto = action.payload;
    },
  },
});

const { setCityName, setWeatherData, setCityPhoto } = weatherDataStore.actions;
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
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
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

const fetchCityPhoto = () => {
    return async (dispatch, getState) => {
        const cityPhotoApiKey = process.env.REACT_APP_PHOTO_KEY;
        const state = getState();
        const cityName = state.weatherdata.cityName;
        console.log(cityName);
        if (cityName) {
            try {
                const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=${cityPhotoApiKey}`;
                const cityPhotoRes = await axios.get(apiUrl);
                dispatch(
                setCityPhoto(cityPhotoRes.data.results[0].urls.regular)
                );
                console.log(cityPhotoRes);

            } catch (error) {
                console.error("Error fetching photo data:", error);

            }
        }

    };
};

const weatherDataReducer = weatherDataStore.reducer;
export { setCityName,fetchUserCity,fetchWeatherData,fetchCityPhoto};
export default weatherDataReducer;
