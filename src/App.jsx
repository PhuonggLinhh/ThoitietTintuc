import './App.css'
import { useState, useRef } from 'react';
import SearchBar from './components/SearchBar';

const [city, setCity] = useState('');
const searchRef = useRef(null);
const [coords, setCoords] = useState(null);

  useEffect(() => {
    searchRef.current?.focus();
    navigator.geolocation?.getCurrentPosition(
      pos => setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      err => console.warn('Geolocation error:', err)
    );
  }, []);
  
  const weatherUrl = coords ? `${base}/weather?lat=${coords.lat}&lon=${coords.lon}${common}`
    : city ? `${base}/weather?q=${city}${common}` : null;

  const forecastUrl = coords ? `${base}/forecast?lat=${coords.lat}&lon=${coords.lon}${common}`
    : city ? `${base}/forecast?q=${city}${common}` : null;

  const newsUrl = city ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(city)}&sortBy=publishedAt&apiKey=${NEWS_KEY}` : null;

const handleSearch = (searchCity) => {
  setCity(searchCity.trim());
};


function App() {
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