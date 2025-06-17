import React, { useState } from "react";
import Axios from "axios";
import WeatherComponent from "./components/WeatherComponent";
import CityComponent from "./components/CityComponent";
import Container from 'react-bootstrap/Container'

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const APIKEY = "29da64dbd90c28f836ab585cfc7a82e7";

    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
      );
      updateWeather(response.data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      alert("Something went wrong! Please check the city name or try again.");
    }
  };

  return (
    <Container className="mt-4">
      <h3 className="text-center">Weather App</h3>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
