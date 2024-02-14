export function chooseDay(array: string[], value: number): string
{
  let index = new Date().getDay() + value;
  while (index > 6) index = index - 7;
  const day: string = array[ index ];

  return (day);
}

export function chooseWeatherCondition(value: number): string
{
  let condition;
  if (value === 0) condition = 'sunny'
  else if (value === 1 || value === 2) condition = 'cloudy'
  else condition = 'rainy-cloud';

  return (condition);
}