import './App.css';
import TodayWeather from './components/TodayWeather/TodayWeather';
import DailyWeather from './components/DailyWeather/DailyWeather';
import HourlyWeather from './components/HourlyWeather/HourlyWeather';
// import axios from 'axios';

function App() {
  const gridArray = [
    {
      className: '',
      propertyName: 'HIGH',
      propertyValue: 31,
      propertyUnit: '\u00B0',
    },
    {
      className: '',
      propertyName: 'FL HIGH',
      propertyValue: 27,
      propertyUnit: '\u00B0',
    },
    {
      className: '',
      propertyName: 'WIND',
      propertyValue: 9,
      propertyUnit: 'mph',
    },
    {
      className: '',
      propertyName: 'LOW',
      propertyValue: 19,
      propertyUnit: '\u00B0',
    },
    {
      className: '',
      propertyName: 'FL LOW',
      propertyValue: 12,
      propertyUnit: '\u00B0',
    },
    {
      className: '',
      propertyName: 'PRECIP',
      propertyValue: .1,
      propertyUnit: 'in',
    },
  ];

  const dailyArray = [
    {
      imgSrc: '/images/rainy-cloud.png',
      day: 'Friday',
      tempValue: '25\u00B0',
    },
  ];

  const hourlyArray = [
    {
      day: 'THURSDAY',
      time: '3 PM',
      imgSrc: '/images/sunny.png',
      tempUnit: '\u00B0',
      tempValue: 30,
      flTempValue: 30,
      windValue: 9,
      precipValue: 0.0,
    },
  ];

  return (
    <>
      <section
        className='m-5'
      >
        <TodayWeather
          gridArray={ gridArray }
          tempImg={ `/images/cloudy.png` }
          tempValue = { 30 }
        />
      </section>

      <section
        className='m-5'
      >
        <DailyWeather
          dailyWeatherArray={ dailyArray }
        />
      </section>

      <section
        className='m-5'
      >
        <HourlyWeather
          hourlyWeatherArray={ hourlyArray }
        />
      </section>
    </>
  )
}

export default App
