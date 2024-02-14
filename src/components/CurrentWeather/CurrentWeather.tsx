import { ReactNode } from "react";
import styles from './CurrentWeather.module.css';

interface Props
{
  gridArray: {
    propertyName: string,
    propertyValue: string,
  }[];
  currentWeather: {
    current: {
      apparent_temperature: number,
      interval: number,
      precipitation: number,
      temperature_2m: number,
      time: number,
      weather_code: number,
      wind_speed_10m: number,
    },
    current_units: {
      apparent_temperature: string,
      interval: string,
      precipitation: string,
      temperature_2m: string,
      time: string,
      weather_code: string,
      wind_speed_10m: string,
    },
    daily: {
      apparent_temperature_max: number[],
      apparent_temperature_min: number[],
      precipitation_hours: number[],
      precipitation_sum: number[],
      temperature_2m_max: number[],
      temperature_2m_min: number[],
      time: number[],
      weather_code: number[],
    },
    daily_units: {
      apparent_temperature_max: string,
      apparent_temperature_min: string,
      precipitation_hours: string,
      precipitation_sum: string,
      temperature_2m_max: string,
      temperature_2m_min: string,
      time: string,
      weather_code: string,
    }
  };
  tempImg: string;
}

export default function TodayWeather({
  gridArray,
  currentWeather,
  tempImg,
}: Props): ReactNode
{ 
  return (
    <div
      className="container-fluid"
    >
      <div
        className={ `container d-flex justify-content-between align-items-start` }
      >
        <div
          className={ `container ${styles["d-flex-cloud"]}` }
        >
          <div
            className={ `d-flex` }
          >
            <img
              src={ tempImg }
              alt="Cloud"
            />
            <p
              className={ `${styles["temp-value-p"]}` }
            >
              { currentWeather.current.temperature_2m }{ currentWeather.current_units.temperature_2m }
            </p>
          </div>
        </div>

        <div
          className={ `container mx-5 ${styles["div-flex"]}` }
        >
          <div
            className="d-flex justify-content-around"
          >
            { gridArray.map((grid, index) =>
            {
              return (
                <div
                  key={ index }
                  className={ `col-2 text-center grid-${index}` }
                >
                  <p>
                    { grid.propertyName }
                  </p>
                  <p
                    className={ `${styles["grid-property-value-p"]}` }
                  >
                    { grid.propertyValue }
                  </p>
                </div>
              );
            }) }
          </div>
        </div>
      </div>
    </div>
  );
}
