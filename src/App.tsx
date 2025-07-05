import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Weather App
            </h1>
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter city name..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                Get Weather
              </button>
            </div>

            {/* Weather display area */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-green-600 text-center">
                Enter a city name to get weather information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
