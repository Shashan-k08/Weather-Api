import '../index.css'
import '../App.css'

import { useState, useEffect } from 'react';
const Search = (props) => {
  const [inputCity, setInputCity] = useState("Lucknow")
  const [parseData, setparseData] = useState({})

  const handlefetchdata = async (e) => {

    if (inputCity) {
      props.setProgress(30);
      const URL = `https://api.weatherapi.com/v1/current.json?key= accad33f988b41d6990185547222012&q=" + ${inputCity} + " &aqi=yes`
      let data = await fetch(URL);
      props.setProgress(50);
      console.log(data);

      if (data.status === 400) {
        props.setProgress(100);
        alert('Wrong city');
      }
      else {
        props.setProgress(70);
        const server = await data.json();
        setparseData(server.current);
        console.log(parseData);
        props.setProgress(100);
     
      }
    }
    //  document.getElementsByClassName("box-1")[0].innerHTML = parseData.current.temp_c;
  }

  function test(e) {
    if (e.keyCode === 13)
      handlefetchdata()
  }
  const handleInputChange = (e) => {
    props.setProgress(0);
    // document.body.style.background = "url('../img/luckonow.jpg')";
    setInputCity(e.target.value);

    // handlefetchdata(e.target.value)


  }

  // ('#formid').on('keyup keypress', function(e) {
  //   var keyCode = e.keyCode || e.which;
  //   if (keyCode === 13) { 
  //     e.preventDefault();
  //     return false;
  //   }
  // });
  // const handleKeyPress = (e) => {
  //   var key = e.keyCode || e.which;
  //   if (key === 13) {
  //     handlefetchdata();
  //   }
  // }
  useEffect(() => {
  setInputCity("Bareilly");
  handlefetchdata();
  }, [])
  return (
    <div  >
      <div className="search-box-input">

        <input type="search" id="search" onChange={handleInputChange} placeholder='Enter the city name' onKeyDown={test} />
        <img src="https://cdn-icons-png.flaticon.com/512/954/954565.png" onClick={handlefetchdata} tabIndex="0" id="search_img" alt="" style={{ height: "2rem", width: "2rem", }} />

      </div>

      <div className="weather-box">
        <div className="weather-box-1">
          <h1 style={{ color: "#746868" }}> Live Weather Forecast</h1>
          <div className="city-box">{inputCity}</div>
        </div>
        <div className="temp-box-1">
        <div className="box-1 box-s"> <img src='https://img.icons8.com/ios-filled/2x/thermometer.png' alt="" style={{ height: "3rem", width: "3rem", }}/> <br/>Temp (&#8451;) <br/>{parseData.temp_c}  </div>
          <div className="box-2 box-s">  <img src='https://img.icons8.com/ios-filled/2x/windsock.png' alt="" style={{ height: "3rem", width: "3rem", }}/> <br/>Wind Speed(kph)<br/>{parseData.wind_kph}  </div>
          <div className="box-3 box-s">  <img src='https://img.icons8.com/ios-filled/2x/barometer-gauge.png' alt="" style={{ height: "3rem", width: "3rem", }}/> <br/>Pressure(mb)<br/>{parseData.pressure_mb}  </div>
         
        </div>
        <div className="temp-box-1">
        <div className="box-1 box-s"> <img src='https://img.icons8.com/ios-filled/2x/invisible.png' alt="" style={{ height: "3rem", width: "3rem", }}/> <br/>Visibility(Kph)<br/>{parseData.vis_km}  </div>
        <div className="box-1 box-s"> <img src='https://img.icons8.com/ios-filled/2x/light-rain-2.png' alt="" style={{ height: "3rem", width: "3rem" }}/> <br/>Precipitation(mm)<br/>{parseData.precip_mm}  </div>
        <div className="box-1 box-s">  <img src='https://img.icons8.com/ios-filled/2x/moisture.png' alt="" style={{ height: "3rem", width: "3rem", }}/> <br/>Humidity(%)<br/>{parseData.humidity} </div>
        </div>
        <div className="last-updated">Last-Updated({parseData.last_updated})</div>
      </div>
    </div>
  )
}

export default Search
Search.defaultProps = {
  progress: 0
}