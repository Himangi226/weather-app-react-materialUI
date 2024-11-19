import SearchBox from "./SearchBox";
import InformantionBox from "./InformationBox";
import { useState } from "react";

export default function WeatherApp () {

    const [weatherInfo, setWeatherInfo] = useState({

        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",



    });

    let updateInfo = (newInfo)=> {
        setWeatherInfo(newInfo);
    }

    return (
        <div style = {{textAlign: "center"}}>
            <h2>Weather App using React js & Material UI </h2> 
            <SearchBox updateInfo = {updateInfo}/>
            <InformantionBox info = {weatherInfo}/>
        </div>
    );
}