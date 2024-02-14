import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import HourlyWeather from "./components/HourlyWeather/HourlyWeather";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { CurrentArrayProps, GridArrayProps, DailyArrayProps, HourlyArrayProps, } from './components/helpers/Props';
import { chooseDay, chooseWeatherCondition, } from './components/helpers/functions';

function App() {
  const [ weatherDataObj, setweatherDataObj ] = useState<CurrentArrayProps>(
    {
      current: {
        apparent_temperature: 0,
        interval: 0,
        precipitation: 0,
        relative_humidity_2m: 0,
        temperature_2m: 0,
        time: 0,
        weather_code: 0,
        wind_speed_10m: 0,
      },
      current_units: {
        apparent_temperature: "",
        interval: "",
        precipitation: "",
        relative_humidity_2m: "",
        temperature_2m: "",
        time: "",
        weather_code: "",
        wind_speed_10m: "",
      },
      daily: {
        apparent_temperature_max: [],
        apparent_temperature_min: [],
        precipitation_hours: [],
        precipitation_sum: [],
        temperature_2m_max: [],
        temperature_2m_min: [],
        time: [],
        weather_code: [],
      },
      daily_units: {
        apparent_temperature_max: "",
        apparent_temperature_min: "",
        precipitation_hours: "",
        precipitation_sum: "",
        temperature_2m_max: "",
        temperature_2m_min: "",
        time: "",
        weather_code: "",
      },
      hourly:
      {
        apparent_temperature: [],
        precipitation: [],
        relative_humidity_2m: [],
        temperature_2m: [],
        time: [],
        weather_code: [],
        wind_speed_10m: [],
      },
      hourly_units:
      {
        apparent_temperature: "",
        precipitation: "",
        relative_humidity_2m: "",
        temperature_2m: "",
        time: "",
        weather_code: "",
        wind_speed_10m: "",
      },
    }
  );
  const [loading, setLoading] = useState(true);
  const lat: number = 9.082,
    lon: number = 8.6753,
    timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const renderRef = useRef(false);

  useEffect(() => {
    axios.get(
        `https://api.open-meteo.com/v1/forecast?current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,wind_speed_10m_max&wind_speed_unit=mph&precipitation_unit=inch`, { params: {
          latitude: lat,
          longitude: lon,
          timezone: timezone,
        } }
      )
      .then((response) => {
        setweatherDataObj(response.data);
        setLoading(false);
        renderRef.current = true;
      })
      .catch((error) => {
        setLoading(false);
        return (<section className='m-5'>Error fetching data: { error }</section>);
      });
  }, [ lat, lon, timezone ]);
  

  const weatherImageArr: string[] = [
    'sunny',
    'cloudy',
    'cloudy',
    'rainy',
  ];

  const gridArray: GridArrayProps[]
  = [
    {
      propertyName: "HIGH",
      propertyValue: `${weatherDataObj.daily.temperature_2m_max[0]}${weatherDataObj.daily_units.temperature_2m_max}`,
    },
    {
      propertyName: "REL HUMIDITY",
      propertyValue: `${weatherDataObj.hourly.relative_humidity_2m[0]}${weatherDataObj.hourly_units.relative_humidity_2m}`,
    },
    {
      propertyName: "WIND",
      propertyValue: `${weatherDataObj.hourly.wind_speed_10m[0]}${weatherDataObj.hourly_units.wind_speed_10m}`,
    },
    {
      propertyName: "LOW",
      propertyValue: `${weatherDataObj.daily.temperature_2m_min[0]}${weatherDataObj.daily_units.temperature_2m_min}`,
    },
    {
      propertyName: "PRECIP",
      propertyValue: `${weatherDataObj.hourly.precipitation[0]}${weatherDataObj.hourly_units.precipitation}`,
    },
  ];

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const hourlyArray: HourlyArrayProps[] = [],
    dailyArray: DailyArrayProps[] = [];
  const hourlyWeatherDataObjEntries = Object.entries(weatherDataObj).filter((array) => array[0] === 'hourly' || array[0] === 'hourly_units');
  const dailyWeatherDataObjEntries = Object.entries(weatherDataObj).filter((array) => array[0] === 'daily' || array[0] === 'daily_units');

  if (renderRef.current)
  {
    for (let i = 0 ; i < 7 ; i++)
    {
      dailyArray.push({
        imgSrc: `/images/${chooseWeatherCondition(dailyWeatherDataObjEntries[1][1].weather_code[i])}.png`,
        day: chooseDay(days, i),
        tempValue: `${((weatherDataObj.daily.temperature_2m_max[i] + weatherDataObj.daily.temperature_2m_min[0]) / 2).toFixed(1)}${weatherDataObj.daily_units.temperature_2m_max}`,
      });
    }

    for (let i = 0 ; i < 24 ; i++)
    {
      hourlyArray.push({
        time: `${hourlyWeatherDataObjEntries[1][1].time[i].slice(11, 16)}`,
        imgSrc: `/images/${weatherImageArr[hourlyWeatherDataObjEntries[1][1].weather_code[i]]}.png`,
        tempValue: `${hourlyWeatherDataObjEntries[1][1].temperature_2m[i]}${hourlyWeatherDataObjEntries[0][1].temperature_2m}`,
        flTempValue: `${hourlyWeatherDataObjEntries[1][1].apparent_temperature[i]}${hourlyWeatherDataObjEntries[0][1].apparent_temperature}`,
        windValue: `${hourlyWeatherDataObjEntries[1][1].wind_speed_10m[i]}${hourlyWeatherDataObjEntries[0][1].wind_speed_10m}`,
        precipValue: `${hourlyWeatherDataObjEntries[1][1].precipitation[i].toFixed(1)}${hourlyWeatherDataObjEntries[0][1].precipitation}`,
      });
    }
  }

  if (loading) return (<section className="m-5"><h1>Loading...</h1></section>)

  return (
    <>
      <section className="m-5">
        <CurrentWeather
          gridArray={ gridArray }
          currentWeather={ weatherDataObj }
          tempImg={`/images/cloudy.png`}
        />
      </section>

      <section className="m-5">
        <DailyWeather dailyWeatherArray={ dailyArray } />
      </section>
      <section className="m-5">
        <HourlyWeather
          day={ days[ new Date().getDay() ] }
          hourlyWeatherArray={ hourlyArray }
        />
      </section>
    </>
  );
}

export default App;
