import ForecastItem from './ForecastItem';

export default function ForecastList({ items }) {
  return (
    <div>
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-grid">
        {items.map((day, index) => (
          <ForecastItem key={index} day={day} />
        ))}
      </div>
    </div>
  );
}