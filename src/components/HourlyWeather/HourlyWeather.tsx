import { ReactNode } from 'react';
import styles from './HourlyWeather.module.css';

interface Props
{
  hourlyWeatherArray: {
    day: string;
    time: string;
    imgSrc: string;
    tempUnit: string;
    tempValue: number;
    flTempValue: number;
    windValue: number;
    precipValue: number;
  }[];
}

export default function HourlyWeather({
  hourlyWeatherArray,
}: Props): ReactNode
{
  return (
    <div
      className="container-fluid"
    >
      <div
        className="container"
      >
        <div
          className={ `row flex-wrap ${styles["hourly-container"]}` }
        >
          { hourlyWeatherArray.map((hourly, index) =>
          {
            return (
              <div
                key={ index }
                className={ `d-flex justify-content-around text-center p-3 ${styles.hourly}` }
              >
                <div>
                  <p
                  >
                    { hourly.day }
                  </p>
                  <p
                    className={ `${styles["hourly-value-p"]}` }
                  >
                    { hourly.time }
                  </p>
                </div>
                <img
                  src={ hourly.imgSrc }
                  alt={ `${hourly.day}, ${hourly.time} weather` }
                />
                <div>
                  <p
                  >
                    TEMP
                  </p>
                  <p
                    className={ `${styles["hourly-value-p"]}` }
                  >
                    { hourly.tempValue }{ hourly.tempUnit }
                  </p>
                </div>
                <div>
                  <p
                  >
                    FL TEMP
                  </p>
                  <p
                    className={ `${styles["hourly-value-p"]}` }
                  >
                    { hourly.flTempValue }{ hourly.tempUnit }
                  </p>
                </div>
                <div>
                  <p
                  >
                    WIND
                  </p>
                  <p
                    className={ `${styles["hourly-value-p"]}` }
                  >
                    { hourly.windValue }mph
                  </p>
                </div>
                <div>
                  <p
                  >
                    PRECIP
                  </p>
                  <p
                    className={ `${styles["hourly-value-p"]}` }
                  >
                    { hourly.precipValue }in
                  </p>
                </div>
              </div>
            );
          }) }
        </div>
      </div>
    </div>
  )
}
