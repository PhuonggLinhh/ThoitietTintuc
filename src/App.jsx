import './App.css'
import { useState, useRef } from 'react';
import SearchBar from './components/SearchBar';
import useFetch from './hooks/useFetch';

const APP_ID = import.meta.env.VITE_OPENWEATHER_API_KEY;
const NEWS_KEY = import.meta.env.VITE_NEWSAPI_KEY;

function App() {
  const [city, setCity] = useState('');
  const [coords, setCoords] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current?.focus();
    navigator.geolocation?.getCurrentPosition(
      pos => setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      err => console.warn('Geolocation error:', err)
    );
  }, []);

  const base = 'https://api.openweathermap.org/data/2.5';
  const common = `&units=metric&appid=${APP_ID}`;

  const weatherUrl = coords ? `${base}/weather?lat=${coords.lat}&lon=${coords.lon}${common}`
    : city ? `${base}/weather?q=${city}${common}` : null;

  const forecastUrl = coords ? `${base}/forecast?lat=${coords.lat}&lon=${coords.lon}${common}`
    : city ? `${base}/forecast?q=${city}${common}` : null;

  const newsUrl = city ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(city)}&sortBy=publishedAt&apiKey=${NEWS_KEY}` : null;

  const { data: current, loading: curLoad, error: curErr } = useFetch(weatherUrl);
  const { data: forecast, loading: foreLoad, error: foreErr } = useFetch(forecastUrl);
  const { data: news } = useFetch(newsUrl); // Không cần error/loading cho news nếu không hiển thị

  const isLoading = curLoad || foreLoad || (city && !news?.articles);
  const hasError = curErr || foreErr;

  const handleSearch = searchCity => {
    setCity(searchCity.trim());
    setCoords(null);
  };

  const fiveDay = forecast?.list?.filter((_, i) => i % 8 === 0).slice(0, 5) ?? [];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <header className="header">
          <h1>Weather & News Aggregator</h1>
          <p>Search for a city to get weather forecast and latest news</p>
        </header>
        <SearchBar ref={searchRef} onSearch={handleSearch} />

      </div>
    </div>
  );
}
export default App;