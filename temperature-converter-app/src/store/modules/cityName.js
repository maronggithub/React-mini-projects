import { createSlice } from "@reduxjs/toolkit";


const cityNameStore = createSlice({
    name:'cityname',
    initialState: {
        cityName:''
    },
    reducers: {
    // 在recucer里面设置action
    setCityName: (state, action) => {
        state.cityName = action.payload;
    }
}
});
const { setCityName } = cityNameStore.actions;
const cityNameReducer = cityNameStore.reducer;
export {setCityName};
export default cityNameReducer; 
