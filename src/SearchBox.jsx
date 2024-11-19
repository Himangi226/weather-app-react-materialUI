import { useState } from "react"; // <-- Add this line
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
// import "./app.css";  

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState(""); // useState is defined here
    let[error, setError] = useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9bfb56dc7cfc9b50bf277c718143c4d6";

    let getWeatherInfo = async() => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
    
            
            let jsonResponse = await response.json();
          
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;

        } catch (err) {
            throw err;
        }

  
    }

    let handleChange = (evt) => {
        setCity(evt.target.value); // Fix evt.change.value to evt.target.value
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity(""); // Reset the city input after submission
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);

        } catch (err) {
            setError(true);

        }
       
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}> {/* Add onSubmit to handle form submission */}
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange} // onChange will update city
                />
               
               <br />
               <br/>

               
                <Button variant="contained" type="submit">
                Search
                </Button>
                {error && <p style= {{color : "red"}}>No such place exists! </p>}
            </form>
        </div>
    );
}
