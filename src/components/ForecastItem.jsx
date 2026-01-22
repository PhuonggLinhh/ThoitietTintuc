export default function ForecastItem({ day }) {
  const date = new Date(day.dt * 1000);
  const dayName = date.toLocaleString('en-US', { weekday: 'short' });
  const icon = day.weather[0].icon;
  const desc = day.weather[0].description;

}