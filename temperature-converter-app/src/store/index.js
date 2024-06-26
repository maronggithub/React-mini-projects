import { configureStore } from '@reduxjs/toolkit';
import cityNameReducer from '../store/modules/cityName';


export const store = configureStore({
  reducer: {
    cityname: cityNameReducer,
  },
});

export default store;
