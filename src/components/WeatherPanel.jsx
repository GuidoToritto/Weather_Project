import React, { useEffect, useState } from "react";
import Form from "./Form";
import Card from "./Card";


const WeatherPanel = () => {

    /*keyword that I use to declare weather, city and forecast*/ 
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=a0f73bec4d9ae3554b8d7528b37693ab&lang=en";
    let cityUrl = "&q=";
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=a0f73bec4d9ae3554b8d7528b37693ab&lang=en";

    /*types of states*/
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    /*fetch to api*/ 
    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //Weather

        urlWeather = urlWeather + cityUrl + loc;

        //promise: Request to api
        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        })
        .then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData);
        })

        //Error 
        .catch(error=>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        urlForecast = urlForecast + cityUrl + loc;

        //Request to api
        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        })
        .then((forecastData)=>{
            console.log(forecastData);
            setForecast(forecastData);
            //Visual info
            setLoading(false);
            setShow(true);
        })

        //Error 
        .catch(error=>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });    
    }

    return(
        <React.Fragment>
            <Form
            //prop to get location
            
            newLocation = {getLocation}
            />

            <Card
            //show to card
            showData = {show}
            loadingData = {loading}
            weather = {weather}
            forecast = {forecast}
            />
        </React.Fragment>
    );    
};



export default WeatherPanel;