import axios from 'axios';
import { useState, useEffect } from 'react';

// https://api.open-meteo.com/v1/forecast?latitude=9.082&longitude=8.6753&timezone=auto&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime

interface Props
{
  lat: number;
  lon: number;
  timezone: string;
}

export default function WeatherData({
  lat,
  lon,
  timezone,
}: Props)
{
  const [ weatherData, setWeatherData ] = useState([]);
  // const [ loading, setLoading ] = useState(true);

  useEffect(() =>
  {
    axios.get("https://api.open-meteo.com/v1/forecast?current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime", { params: {
      latitude: lat,
      longitude: lon,
      timezone: timezone,
    } })
      .then(response => {
        setWeatherData(response.data);
        // setLoading(false);
      })
      .catch((error) =>
      {
        console.error("Error fetching data:", error);
        // setLoading(false);
      })
  }, [ lat, lon, timezone ]);

  return (weatherData);
}

// function getCurrentWeather({
//   current,
//   daily,
// })
// {
//   const {
//     temperature_2m: currentTemp,
//     wind_speed_10m: windSpeed,
//     weather_code: iconCode,
//   } = current;

//   const {
//     temperature_2m_min: [ minTemp ],
//     temperature_2m_max: [ maxTemp ],
//     apparent_temperature_min: [ minFeelsLike ],
//     apparent_temperature_max: [ maxFeelsLike ],
//     precipitation_sum: [ precip ],
//   } = daily;

//   return ({
//     currentTemp: Math.round(currentTemp * 10) / 10,
//     lowTemp: Math.round(minTemp * 10) / 10,
//     highTemp: Math.round(maxTemp * 10) / 10,
//     lowFeelsLike: Math.round(minFeelsLike * 10) / 10,
//     highFeelsLike: Math.round(maxFeelsLike * 10) / 10,
//     windSpeed: Math.round(windSpeed * 10) / 10,
//     precip: Math.round(precip * 100) / 100,
//     iconCode,
//   });
// }

// function getHourlyWeather(data: {})
// {}

// function getDailyWeather(data: {})
// {}
