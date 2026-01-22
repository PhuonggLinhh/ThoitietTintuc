import CurrentWeather from './CurrentWeather';
import ForecastList from './ForecastList';

export default function WeatherSection({ current, forecast }) {
  return (
    <section className="weather-section">
      <h2 className="city-name">
        {current.name}, {current.sys.country}
      </h2>

      <CurrentWeather data={current} />

      {forecast.length > 0 && <ForecastList items={forecast} />}
    </section>
  );
}