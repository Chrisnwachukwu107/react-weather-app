import { ReactNode } from "react";
import styles from './Today.module.css';

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

export default function Today({
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
        className="container d-flex justify-content-between align-items-start"
      >
        <div
          className="container"
        >
          <div
            className="d-flex"
          >
            <img
              src={ tempImg }
              alt="Cloud"
            />
            <p>
              { tempValue }&deg;
            </p>
          </div>
        </div>

        <div
          className={ `container ${styles["div-flex"]}` }
        >
          <div
            className="row justify-content-between"
          >
            { gridArray.map((grid, index) =>
            {
              return (
                <div
                  key={ index }
                  className={ `col-2 grid-${index} ${grid.className}` }
                >
                  <p>
                    { grid.propertyName }
                  </p>
                  <p>
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
