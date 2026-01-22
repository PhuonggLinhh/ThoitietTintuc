export default function CurrentWeather({ data }) {
  const { name, sys, main, weather, wind } = data;
  const icon = weather[0].icon;
  const description = weather[0].description;