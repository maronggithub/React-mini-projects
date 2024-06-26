import { configureStore } from "@reduxjs/toolkit";
import weatherDataReducer from "./modules/weatherData";

export const store = configureStore({
  reducer: {
    weatherdata: weatherDataReducer,
  },
});

export default store;
