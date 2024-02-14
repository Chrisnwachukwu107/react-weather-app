export interface CurrentArrayProps {
  current:
  {
    apparent_temperature: number;
    interval: number;
    precipitation: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  current_units:
  {
    apparent_temperature: string;
    interval: string;
    precipitation: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
    weather_code: string;
    wind_speed_10m: string;
  };
  daily:
  {
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    precipitation_hours: number[];
    precipitation_sum: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: number[];
    weather_code: number[];
  };
  daily_units:
  {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_hours: string;
    precipitation_sum: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    weather_code: string;
  };
  hourly:
  {
    apparent_temperature: number[];
    precipitation: number[];
    relative_humidity_2m: number[];
    temperature_2m: number[];
    time: number[];
    weather_code: number[];
    wind_speed_10m: number[];
  };
  hourly_units:
  {
    apparent_temperature: string;
    precipitation: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
    weather_code: string;
    wind_speed_10m: string;
  }
}

export interface GridArrayProps
{
  propertyName: string;
  propertyValue: string;
}

export interface DailyArrayProps
{
  imgSrc: string;
  day: string;
  tempValue: string;
}

export interface HourlyArrayProps
{
  time: string;
  imgSrc: string;
  tempValue: string;
  flTempValue: string;
  windValue: string;
  precipValue: string;
}
