import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InformationBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InformationBox({info}) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1572536872600-0a752fb9ee5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGluZGlhfGVufDB8fDB8fHww";

    let COLD_URL =
    "https://images.unsplash.com/photo-1641672222794-536ad524a929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let HOT_URL = 
    "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let RAIN_URL =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    


    return (
        <div className="InformationBox">
            <div className="cardContainer">

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}

                    // To check weather humidity, rain, hot temp and cold temp

                    image = {
                        info.humidity > 80 
                        ?  RAIN_URL
                        : info.temp > 15 
                        ?  HOT_URL  
                        : COLD_URL
                    } 



                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                        info.humidity > 80 
                        ? <ThunderstormIcon/> 
                        : info.temp > 15 
                        ? <WbSunnyIcon/>
                        : < AcUnitIcon/>
                    } 

                    </Typography>

                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}%</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </div>
    );
}
