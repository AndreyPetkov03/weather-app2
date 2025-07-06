import { useState, useEffect } from 'react'
import './App.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Location SVG Icon Component
  const LocationIcon = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-2"
    >
      <path 
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
        fill="currentColor"
      />
    </svg>
  );

  // Get animation based on weather condition
  const getWeatherAnimation = (weatherMain: string, hour: number) => {
    const isNight = hour < 6 || hour > 18;
    const condition = weatherMain.toLowerCase();
    
    if (condition.includes('clear') || condition.includes('sunny')) {
      return isNight ? '/moon.json' : '/sunny.json';
    } else if (condition.includes('cloud')) {
      return isNight ? '/moon with clouds.json' : '/cloudy.json';
    } else if (condition.includes('rain') || condition.includes('drizzle')) {
      return '/rain with sun.json';
    } else if (condition.includes('thunder') || condition.includes('storm')) {
      return '/thunder and rain.json';
    } else if (condition.includes('snow')) {
      return '/snow.json';
    } else if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) {
      return '/cloudy.json';
    } else {
      return isNight ? '/moon.json' : '/sunny.json';
    }
  };

  const fetchWeatherByLocation = async (lat: number, lon: number) => {
    setLoading(true);
    setError('');
    
    try {
      const apiKey = 'e66ec96d5f1247c6a48230953250507';
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`
      );
      
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      
      const data = await response.json();
      // Transform WeatherAPI data to match our interface
      const transformedData = {
        name: data.location.name,
        main: {
          temp: data.current.temp_c
        },
        weather: [{
          main: data.current.condition.text.split(' ')[0], // Get first word for condition
          description: data.current.condition.text
        }]
      };
      setWeather(transformedData);
    } catch (err: any) {
      setError(err.message || 'Error fetching weather');
    } finally {
      setLoading(false);
    }
  };

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByLocation(latitude, longitude);
      },
      () => {
        setError('Location access denied. Please enable location services.');
      }
    );
  };

  useEffect(() => {
    requestLocation();
  }, []);

  const currentHour = new Date().getHours();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden font-['Roboto']">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        {loading && (
          <div className="text-center px-4">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-18 md:w-18 border-b-2 border-gray-600 mx-auto mb-4 sm:mb-5"></div>
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light">Getting your weather...</p>
          </div>
        )}

        {error && (
          <div className="text-center px-4">
            <p className="text-red-500 mb-4 sm:mb-5 text-base sm:text-lg md:text-xl font-light">{error}</p>
            <button
              onClick={requestLocation}
              className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-base sm:text-lg font-medium"
            >
              Try Again
            </button>
          </div>
        )}

        {weather && !loading && (
          <div className="text-center text-gray-800 px-4">
            {/* City Name with Location Icon at top */}
            <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
              <LocationIcon />
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-light text-gray-600">
                {weather.name}
              </h1>
            </div>

            {/* Weather Animation in middle */}
            <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                <DotLottieReact
                  src={getWeatherAnimation(weather.weather[0].main, currentHour)}
                  loop
                  autoplay
                />
              </div>
            </div>

            {/* Temperature at bottom */}
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin mb-2 sm:mb-3 text-gray-800">
              {Math.round(weather.main.temp)}°
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl capitalize px-2 font-light">
              {weather.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
