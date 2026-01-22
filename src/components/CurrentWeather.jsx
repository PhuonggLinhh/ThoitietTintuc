export default function CurrentWeather({ data }) {
    const { name, sys, main, weather, wind } = data;
    const icon = weather[0].icon;
    const description = weather[0].description;

    return (
        <div className="current-weather">
            <div className="weather-main">
                <div className="weather-icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                        alt={description}
                        style={{ width: '120px', height: '120px' }}
                    />
                </div>
                <div>
                    <div className="current-temp">{Math.round(main.temp)}°C</div>
                    <div style={{ fontSize: '1.4rem', opacity: 0.9 }}>{description}</div>
                </div>
            </div>
            <div className="weather-details">
                <div className="detail-item">
                    <span>Feels like:</span> {Math.round(main.feels_like)}°C
                </div>
                <div className="detail-item">
                    <span>Humidity:</span> {main.humidity}%
                </div>
                <div className="detail-item">
                    <span>Wind:</span> {wind.speed} m/s
                </div>
                <div className="detail-item">
                    <span>Pressure:</span> {main.pressure} hPa
                </div>
            </div>
        </div>
    );
}