import { configureStore } from "@reduxjs/toolkit";
import weatherDataReducer from "./modules/weatherData";

export const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer,
  },
});

export default store;
