import { configureStore } from "@reduxjs/toolkit";
import weatherDataReducer from "./modules/weatherData.js";

export const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer,
  },
});

export default store;
