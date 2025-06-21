import { useEffect, useState } from 'react';

interface WeatherData {
  weather: { description: string }[];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>('Hyderabad');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = ''; // API Key
      setLoading(true);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-container p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {loading ? (
        <p>Loading weather data...</p>
      ) : weather ? (
        <div>
          {/* Only show weather description and temperature */}
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {weather.weather[0].description}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {weather.main.temp}°C
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            High: {weather.main.temp_max}°C | Low: {weather.main.temp_min}°C
          </p>
        </div>
      ) : (
        <p>Unable to fetch weather data.</p>
      )}
    </div>
  );
};

export default Weather;
