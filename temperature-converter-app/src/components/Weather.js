import React from 'react'
import Searchbox from './Searchbox'
import { useSelector } from "react-redux";

function Weather() {
  const cityName = useSelector((state) => state.cityname.cityName);
  return (
    <div className='weatherbox' id='weatherbox'>
      <Searchbox/>
      <div className='weatherpic' >{cityName}</div>
      <h1 className='tempature'>36 C</h1>
      <h2 className=''> cloud</h2>

    </div>
  )
}

export default Weather
