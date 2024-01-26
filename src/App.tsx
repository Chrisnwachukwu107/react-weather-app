import './App.css';
import Today from './components/Today/Today';

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

  return (
    <>
      <section
        className='m-5'
      >
        <Today
          gridArray={ gridArray }
          tempImg={ `/images/cloudy.png` }
          tempValue = { 30 }
        />
      </section>
    </>
  )
}

export default App
