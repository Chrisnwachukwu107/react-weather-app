import { ReactNode } from "react";
import styles from './TodayWeather.module.css';

interface Props
{
  gridArray: {
    className: string,
    propertyName: string,
    propertyValue: number,
    propertyUnit: string,
  }[];
  tempImg: string;
  tempValue: number;
}

export default function TodayWeather({
  gridArray,
  tempImg,
  tempValue,
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
              { tempValue }&deg;
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
                  className={ `col-2 text-center grid-${index} ${grid.className}` }
                >
                  <p>
                    { grid.propertyName }
                  </p>
                  <p
                    className={ `${styles["grid-property-value-p"]}` }
                  >
                    { grid.propertyValue }{ grid.propertyUnit }
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
