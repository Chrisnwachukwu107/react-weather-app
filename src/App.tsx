import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurentWeather";
import DailyWeather from "./components/DailyWeather/DailyWeather";
import HourlyWeather from "./components/HourlyWeather/HourlyWeather";
// import axios from 'axios';
import WeatherData from "./components/WeatherData/WeatherData";

interface CurrentWeatherProps
{
  [key: string]: any;
}

function App() {
  const gridArray = [
    {
      className: "",
      propertyName: "HIGH",
      propertyValue: 31,
      propertyUnit: "\u00B0",
    },
    {
      className: "",
      propertyName: "FL HIGH",
      propertyValue: 27,
      propertyUnit: "\u00B0",
    },
    {
      className: "",
      propertyName: "WIND",
      propertyValue: 9,
      propertyUnit: "mph",
    },
    {
      className: "",
      propertyName: "LOW",
      propertyValue: 19,
      propertyUnit: "\u00B0",
    },
    {
      className: "",
      propertyName: "FL LOW",
      propertyValue: 12,
      propertyUnit: "\u00B0",
    },
    {
      className: "",
      propertyName: "PRECIP",
      propertyValue: 0.1,
      propertyUnit: "in",
    },
  ];

  const dailyArray = [
    {
      imgSrc: "/images/rainy-cloud.png",
      day: "Friday",
      tempValue: "25\u00B0",
    },
  ];

  const hourlyArray = [
    {
      day: "THURSDAY",
      time: "3 PM",
      imgSrc: "/images/sunny.png",
      tempUnit: "\u00B0",
      tempValue: 30,
      flTempValue: 30,
      windValue: 9,
      precipValue: 0.0,
    },
  ];

  const weatherData = WeatherData({
    lat: 9.082,
    lon: 8.6753,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  const currentWeather: CurrentWeatherProps = new Object();
  Object.entries(weatherData).forEach((key) => {
    const arr = ["current", "current_units", "daily", "daily_units"];
    if (arr.includes(key[0])) currentWeather[key[0]] = key[1];
  });

  return (
    <>
      <section
        className="m-5"
      >
        <CurrentWeather
          gridArray={gridArray}
          currentWeather={currentWeather}
          tempImg={`/images/cloudy.png`}
          tempValue={30}
        />
      </section>

      <section
        className="m-5"
      >
        <DailyWeather
          dailyWeatherArray={dailyArray}
        />
      </section>
      <section
        className="m-5"
      >
        <HourlyWeather
          hourlyWeatherArray={hourlyArray}
        />
      </section>
    </>
  );
}

export default App;
