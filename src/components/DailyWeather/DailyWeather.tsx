import { ReactNode } from 'react';
import styles from './DailyWeather.module.css';

interface Props
{
  dailyWeatherArray: {
    imgSrc: string;
    day: string;
    tempValue: string;
  }[];
}

export default function DailyWeather({
  dailyWeatherArray
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
          className={ `row flex-wrap ${styles["daily-container"]}` }
        >
          { dailyWeatherArray.map((daily, index) =>
          {
            return (
              <div
                key={ index }
                className={ `col-2 text-center p-3 ${styles.daily}` }
              >
                <img
                  src={ daily.imgSrc }
                  alt={ `${daily.day} weather` }
                  width={ 100 }
                />
                <p
                >
                  { daily.day }
                </p>
                <p
                  className={ `${styles["daily-value-p"]}` }
                >
                  { daily.tempValue }
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
