import { ReactNode } from 'react';
import styles from './HourlyWeather.module.css';

interface Props
{
  day: string;
  hourlyWeatherArray: {
    time: string;
    imgSrc: string;
    tempValue: string;
    flTempValue: string;
    windValue: string;
    precipValue: string;
  }[];
}

export default function HourlyWeather({
  day,
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
                    { day }
                  </p>
                  <p
                    className={ `${styles["hourly-value-p"]}` }
                  >
                    { hourly.time }
                  </p>
                </div>
                <img
                  src={ hourly.imgSrc }
                  alt={ `${day}, ${hourly.time} weather` }
                />
                <div>
                  <p
                  >
                    TEMP
                  </p>
                  <p
                    className={ `${styles["hourly-value-p"]}` }
                  >
                    { hourly.tempValue }
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
                    { hourly.flTempValue }
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
                    { hourly.windValue }
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
                    { hourly.precipValue }
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
