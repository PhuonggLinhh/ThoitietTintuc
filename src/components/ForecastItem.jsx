export default function ForecastItem({ day }) {
  const date = new Date(day.dt * 1000);
  const dayName = date.toLocaleString('en-US', { weekday: 'short' });
  const icon = day.weather[0].icon;
  const desc = day.weather[0].description;

  return (
    <div className="forecast-card">
      <div className="forecast-day">{dayName}</div>
      <div className="forecast-icon">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={desc}
        />
      </div>
      <div className="forecast-temp">
        {Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°
      </div>
      <div className="forecast-desc">{desc}</div>
    </div>
  );
}