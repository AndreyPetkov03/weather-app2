# Sleek and Minimalistic Weather App

A beautifully designed, ultra-minimalistic weather application that delivers real-time weather information with stunning animations and intelligent dark/light mode switching. Built with modern web technologies for optimal performance and user experience.

![Weather App Demo](Minimalistic%20weather%20app%20animated%20gif.gif)

## 🌟 Preview

### Desktop View
![Desktop Weather App](Minimalistic%20weather%20app.png)

### Mobile View
![Mobile Weather App](minimalistic%20weather%20app%20mobile.png)

## ✨ Features

- 🌤️ **Real-time Weather Data** - Powered by WeatherAPI for accurate, up-to-date weather information
- 🎨 **Stunning Lottie Animations** - Contextual weather animations that match current conditions
- 🌙 **Smart Dark Mode** - Automatically switches to dark theme during night hours (6 PM - 6 AM)
- 📱 **Fully Responsive** - Seamless experience across all devices and screen sizes
- 📍 **Location-Based** - Automatically detects your location for instant weather updates
- 🎭 **Modern Typography** - Features Bebas Neue font for a bold, contemporary look
- ⚡ **Lightning Fast** - Built with Vite for optimal performance and instant loading
- 🎯 **Minimalistic Design** - Clean, distraction-free interface focusing on essential information
- 🔄 **Smooth Transitions** - Polished animations and transitions throughout the app

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- WeatherAPI key (free from [WeatherAPI.com](https://weatherapi.com/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AndreyPetkov03/weather-app2.git
   cd weather-app2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your WeatherAPI key
   VITE_WEATHER_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` and enjoy!

## 🛠️ Built With

### Core Technologies
- **React 19** - Latest React with modern hooks and features
- **TypeScript** - Type-safe development for better code quality
- **Vite** - Next-generation frontend tooling for blazing fast builds

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **Bebas Neue Font** - Modern, bold typography via Google Fonts
- **Lottie Animations** - High-quality, lightweight animations via @lottiefiles/dotlottie-react

### APIs & Data
- **WeatherAPI** - Reliable weather data provider with global coverage
- **Geolocation API** - Browser-native location detection

## 🎨 Design Philosophy

This weather app embraces minimalism without sacrificing functionality. The design focuses on:

- **Essential Information Only** - Location, weather animation, and temperature
- **Contextual Theming** - Automatically adapts to time of day
- **Responsive Typography** - Scales beautifully across all screen sizes
- **Smooth Interactions** - Polished loading states and error handling
- **Zero Clutter** - Clean interface with strategic use of whitespace

## 📱 Responsive Design

The app provides an optimal viewing experience across a wide range of devices:

- **Mobile First** - Designed primarily for mobile devices
- **Tablet Optimized** - Perfect scaling for medium-sized screens
- **Desktop Enhanced** - Takes advantage of larger screens with bigger animations

## 🌈 Weather Animations

Dynamic Lottie animations that respond to real weather conditions:

- ☀️ **Sunny** - Bright sun animation for clear skies
- 🌙 **Moon** - Peaceful moon animation for clear nights
- ☁️ **Cloudy** - Floating clouds for overcast conditions
- 🌧️ **Rainy** - Animated raindrops for precipitation
- ⛈️ **Thunderstorm** - Dramatic lightning effects
- ❄️ **Snow** - Gentle snowfall animation
- 🌪️ **Windy** - Dynamic wind effects

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Required: Your WeatherAPI key
VITE_WEATHER_API_KEY=your_weatherapi_key_here
```

### Build Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔒 Security

- API keys are securely stored in environment variables
- No sensitive data is committed to version control
- Environment files are properly gitignored
- Type-safe API interactions with TypeScript

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AndreyPetkov03/weather-app2/issues).

## 📧 Contact

**Andrey Petkov** - [@AndreyPetkov03](https://github.com/AndreyPetkov03)

Project Link: [https://github.com/AndreyPetkov03/weather-app2](https://github.com/AndreyPetkov03/weather-app2)

---

<p align="center">
  <strong>Made with ❤️ and modern web technologies</strong>
</p>
